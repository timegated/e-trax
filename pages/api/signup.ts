import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
// For ensuring consistency of object instances
import prisma from '../../lib/prisma';

/**
 * We need bcrypt for any sensitive information, this provides us with hashing functions to
 * obfuscate anything we don't want getting out to the world
 * Cookies for storing information about the user and sending that with requests
 * 
 * How do serverless functions execute?
 * Kind of works like a callback - sls functions don't fire until events come in/happen
 * Whenever someone hits the /signup route the function will get executed
 * Can respond to anything.
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body; // we get this off of the request body

  let user;

  // might fail so we use try-catch to catch/respond to anything that goes wrong
  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (error) {
    res.status(401);
    res.json({ error: 'User Already Exists' });
    return;
  }

  const token = jwt.sign({
    email: user.email,
    id: user.id,
    time: Date.now(),
  },
    'hello',
    { expiresIn: '8h' },
  );

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('TRAX_ACCESS_TOKEN', token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  )
};

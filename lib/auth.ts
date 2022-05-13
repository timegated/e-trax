import jwt from 'jsonwebtoken';
import prisma from './prisma';
import { NextApiRequest, NextApiResponse } from 'next';

interface JwtPayload {
  id: number
};

// HOF for protected routes
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // check for the existence of a valid token
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, 'hello') as JwtPayload;

        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error('No user found!');
        }
      } catch (error) {
        res.status(401);
        res.json({ error: 'Not Authorized' });
        console.error({ error });
      }

      return handler(req, res, user);
    }

    res.json(401);
    res.json({ error: 'Not Authorized' });
  }
};

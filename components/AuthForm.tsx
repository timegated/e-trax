import React, { FC } from 'react';
import NextImage from 'next/image';
import {
  Box,
  Flex,
  Input,
  Button
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr'; // Handle cache-ing and other complex request things
import { auth } from '../lib/mutations';

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);


    await auth(mode, { email, password });

    setIsLoading(false);
    router.push('/');
  };

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="https://s3.amazonaws.com/random.web.assets/logo.svg" height={60} width={60} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" background="gray.900" borderRadius="5px">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              bg="green.500"
              sx={{
                '&:hover': {
                  bg: 'green.300',
                }
              }}
              isLoading={isLoading}>
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;

import React, { FC } from 'react';
import {
  Box,
  Flex,
  Input,
  Button
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import { auth } from '../lib/mutations';

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setIsLoading] = React.useState(false);
  const router = useRouter();

  return (
    <Box height="100vh" width="100vw" bg="white">
      <Flex justify="center" align="center" height="100px">
        hello
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        form
      </Flex>
    </Box>
  );
};

export default AuthForm;

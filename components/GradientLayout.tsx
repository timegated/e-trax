import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage
}) => {
  return (
    <Box
      height="calc(100vh - 25px)"
      overflowY="auto"
      bgGradient={`linear(${color}.500, ${color}.600 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
         {children}
      </Flex>
    </Box>
  );
};

export default GradientLayout;

import {
  Box,
  List,
  ListIcon,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout';
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md';
import Image from 'next/image';

const SideBar = () => {
  return (
    <Box
      position="absolute"
      height="calc(100vh - 100px)"
      width="100%"
      border="1px solid red"
      background="black"
      paddingX="5px"
      color="gray"
    >
      <Box
        paddingY="20px"
      >
        <Box
          width="120px"
          marginBottom="20px"
          paddingX="20px"
        >
          <Image 
            src="https://s3.amazonaws.com/random.web.assets/logo.svg"
            height={60}
            width={120}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;

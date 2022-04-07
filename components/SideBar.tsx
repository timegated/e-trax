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

      </Box>
    </Box>
  );
};

export default SideBar;

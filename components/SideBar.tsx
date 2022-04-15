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
import NextLink from 'next/link';

const navigation = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
];

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
        <Box marginBottom="20px">
          <List spacing={2}>
            {navigation.map(navItem => {
              return (
                <ListItem
                  key={navItem.name}
                  paddingX="20px"
                  fontSize="16px"
                >
                  <LinkBox>
                  {/* passHref passes the href to it's child component */}
                    <NextLink href={navItem.route} passHref>
                      <LinkOverlay>
                        <ListIcon as={navItem.icon} color="#FFFFFF" marginRight="20px" />
                        {navItem.name}
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;

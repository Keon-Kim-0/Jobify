import React, { useState, useContext } from 'react';
import { GlobalStateContext } from './App';
import {
  Box,
  Button,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  ChatIcon,
  CalendarIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Nav() {
  const { colorMode, toggleColorMode } = useContext(GlobalStateContext);

  return (
    <div>
      <Box bg={`${colorMode}.200`} pb="2">
        <Button onClick={toggleColorMode} className="" ml="2" mr="2" mt="-1">
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>

        <div className="flex">
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<ChevronDownIcon />}
              mt="2"
              mr="2"
            >
              User
            </MenuButton>
            <MenuList>
              <MenuItem>Sign Out</MenuItem>
            </MenuList>
          </Menu>

          <Router>
            <Link to="/Home">
              <Button mt="2" mr="2">
                <CalendarIcon />
              </Button>
            </Link>

            <Link to="/Bulletin">
              <Button mt="2" mr="2">
                <ChatIcon />
              </Button>
            </Link>

            <Link to="/Data">
              <Button mt="2" mr="2">
                Data
              </Button>
            </Link>

            <Link to="/Fun">
              <Button mt="2" mr="2">
                Fun
              </Button>
            </Link>
          </Router>
        </div>
      </Box>
    </div>
  );
}

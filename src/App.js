import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Container>
      {/* Navbar */}
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Container>
  );
}

export default App;

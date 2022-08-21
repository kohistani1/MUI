import { Box } from '@mui/material';
import React from 'react';

function Sidebar() {
  return (
    <Box
      sx={{
        backgroundColor: 'skyblue',
        flex: 1,
        p: 2,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      Sidebar
    </Box>
  );
}

export default Sidebar;

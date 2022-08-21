import { Box } from '@mui/material';
import React from 'react';

function Rightbar() {
  return (
    <Box
      sx={{
        backgroundColor: 'lightcoral',
        flex: 1,
        p: 2,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      Rightbar
    </Box>
  );
}

export default Rightbar;

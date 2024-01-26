import { Stack } from '@mui/material';
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    <Stack width="100%" justifyContent="center" alignItems="center" direction="row">
        <InfinitySpin color="gray" />
    </Stack>
}

export default Loader
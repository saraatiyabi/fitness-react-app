import { Stack } from '@mui/material'
import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Stack justifyContent="center" alignItems="center">
            <InfinitySpin
                visible={true}
                width="200"
                color="#ff2625"
                ariaLabel="infinity-spin-loading"
            />
        </Stack>
    )
}

export default Loader
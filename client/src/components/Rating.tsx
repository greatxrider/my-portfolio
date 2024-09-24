import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({ rating }) {
    // const [value, setValue] = React.useState(2);
    return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating
                name="simple-controlled"
                value={rating}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
                size="large"
                readOnly
            />
        </Box>
    );
}
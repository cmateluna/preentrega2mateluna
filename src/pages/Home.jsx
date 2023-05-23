import React from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Home = () => {
    return (
        <React.Fragment>
            <Box>
                <Typography variant="h4" gutterBottom color="text.primary">
                    Musica De Rock
                </Typography>
            </Box>
            <ItemListContainer />
        </React.Fragment>
    )
}
export default Home
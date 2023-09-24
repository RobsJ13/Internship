import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Autocomplete, TextField, Tabs, Tab } from '@mui/material'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
const movieArray = ["RDX", "Kasargold", "Jailer"]
const Header = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <AppBar sx={{ bgcolor: '#21028' }}>
                <Toolbar>
                    <Box display={"flex"} width={"20%"}>
                        <MovieCreationIcon />
                        {/* <img src='BM_logo.jpg' alt="logo"></img> */}
                        {/* <Box
                            component="img"
                            sx={{
                                height: 50,
                                width: 50,
                            }}
                            alt="logo"
                            src="./images/BM_logo.png"
                        /> */}
                    </Box> 

                    <Box width={"30%"} margin={'auto'}>
                        <Autocomplete
                            options={movieArray.map((option) => option)}
                            renderInput={(params) => (
                                <TextField sx={{ input: { color: 'white' } }} variant='standard'{...params} placeholder="Select Movie" />
                            )} />
                    </Box>
                    <Box display={"flex"} marginLeft={"250px"}>
                        <Tabs textColor='white' indicatorColor='secondary' value={value} onChange={(e, val) => { setValue(val)}}>
                            <Tab label="Movies" onClick={()=>alert("hi")}/>
                            <Tab label="Login/SignUp" />
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
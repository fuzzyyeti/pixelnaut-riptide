import { AppBar, Toolbar, Typography } from '@mui/material';
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import React from "react";

const Nav = () => {
    return (
        <AppBar>
            <Toolbar sx={{backgroundColor: 'rgb(29,37,122)'}}>
                <Typography sx={{flexGrow: 1}}> </Typography>
                <WalletMultiButton style={{background: "orange"}}/>
            </Toolbar>

        </AppBar>
        )
}
export default Nav
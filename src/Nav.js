import { AppBar, Toolbar, Typography } from '@mui/material';
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import React from "react";

const Nav = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography sx={{flexGrow: 1}}> </Typography>
                <WalletMultiButton/>
            </Toolbar>

        </AppBar>
        )
}
export default Nav
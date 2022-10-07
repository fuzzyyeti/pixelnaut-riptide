import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import {Typography} from "@mui/material";
import RoadmapCard from "./RoadmapCard";
import React from "react";

var Roadmap = () =>
{
    return(
        <>
            <h2 style={{marginTop: '100px', color: "white" }}>How To Play</h2>
            <RoadmapCard content={<div><p>If you own one or more Orcanauts, connect your wallet and see your pet in the game window.
                Switch between your different Orcanauts with the carousel.
                Each one has a unique game. You can feed and clean your Orcanaut's tank to collect coins.
                Use your coins to upgrade your tank and decorate it with items.</p><ul>
                <li>Make sure to feed your Pixelnaut every 24 hours (one minute in demo mode).
                You may get some coins, if you don't feed it too often, but if you wait to long you will lose all your coins.</li>
                <li>Make sure to clean your Pixelnaut's tank every seven days (seven minutes for demo mode).
                    You may get some coins, if you don't clean it too often, but if you wait to long you will lose all your coins.</li>
                <li>Open the shop window to buy items. You can drag them around the tank to the perfect location.</li>
                <li>Open the shop window to upgrade your tank. You will get more room to decorate.</li>
                <li>If you transfer your Orcanaut to a new wallet, the tank, items,
                    and coins travel along with the Orcanaut to the new owner!</li></ul></div>} />
        </>
    )
}

export default Roadmap
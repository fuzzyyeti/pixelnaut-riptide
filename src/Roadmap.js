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
                <li>Make sure to feed your Pixelnaut every 24 hours  (One minute in demo mode).
                You may get some coins, but if you wait to long you will lose all your coins.</li>
                <li>Make sure to clean your Pixelnaut's tank every 7 days (7 minutes for demo mode).
                    You may get some coins, but if you wait to long you will lose all your coins.</li>
                <li>Open the store window to buy items. You can drag them around the tank to the perfect location.</li>
                <li>Open the store window to upgrade your tank. You will get more room and the ability to add more items.</li></ul></div>} />
            <h2 style={{marginTop: '100px', color: "white" }}>Roadmap</h2>
            <Box sx={{width: '100px', height: '100px',background: 'linear-gradient(#FFF, #FFF) no-repeat center/2px 100%'}}/>
            <RoadmapCard heading={'Mini Games'} content={'Instead of getting coins directly from feeding your ' +
                'Pixelnaut and cleaning it\'s tank, you will improve your orcanauts characteristis, which will help it' +
                'succeed in several mini games. Some example characteristics are, speed, nimbleness, cuteness, social ability, and wealth. Your Orcanaut' +
                'Your Orcanaut will have different baseline characteristics based on their NFT traits.'}/>
            <Box sx={{width: '100px', height: '100px',background: 'linear-gradient(#FFF, #FFF) no-repeat center/2px 100%'}}/>
            <RoadmapCard heading={'Play To Earn'} content={<div><p>Partner projects provide a block of their project tokens
                to be distributed to yield farmers during a campaign period as an incentive to provide liquidity. This is called "Double Dip".
                Project partners will now have the option to provide a portion of these incentive tokens as a reward for Pixelnaut Pet Shop players.
                Players can cash out at the end of the campaign, trading all their items and tank for tokens and starting back in the back. The tokens
                will be distributed to the players based on their percentage of the total Pixelnaut Pet Shop coins that have been cashed out.</p>
                <h3>Benefits for Orca</h3>
                <p>People intersted in playing the game will need to visit Orca.so at least once every 24 hours. This will keep Orca at the forefront of their minds and also provide
                an opportunity for Orca to display whatever communication they would like on the Orcanaut Pet Shop page.</p>
                <h3>Benefits for partner Projects</h3>
                <p>
                The campaign will draw the attention of people interested in NFTs and P2E games to their project. By drawing their attention to the project and Orca,
                    these people may be converted to liquidity providers in the project. Or attracted to the project itself.</p>
                <h3>Benefits for Orcanaut holders</h3>
                <p>The value of Orcanauts will increase, and all the people hoping for some form de-fi integration will be happy. Certain traits will be more valuable for mini-games
                reinforcing the value of more rare Orcanauts. People will also have the incentive to collect more than one Orcanaut,
                    because each one will be able to play a unique game and earn rewards for a campaign.</p>
            </div>}/>
        </>
    )
}

export default Roadmap
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import {Typography} from "@mui/material";
import RoadmapCard from "./RoadmapCard";

var Roadmap = () =>
{
    return(
        <>
            <h2 style={{marginTop: '100px', color: "white" }}>Roadmap</h2>
            <RoadmapCard heading={'This is the heading'} content={'Is this live?'}/>
            <RoadmapCard heading={'This is the second heading'} content={'this is the content'}/>
        </>
    )
}

export default Roadmap
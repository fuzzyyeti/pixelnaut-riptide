import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import React from "react"

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const RoadmapCard = (props) =>
{


    return (
        <>
            <Card sx={{ minWidth: 300, maxWidth: 800, background: 'rgb(29,37,122)',borderColor: 'white', borderWidth: '2px', borderStyle: 'solid' }}>
                <CardContent>
                    <Typography variant={'h3'} color="white" gutterBottom>
                        {props.heading}
                    </Typography>
                    <Typography align={"left"} sx={{ fontSize: 20 }} color="white" gutterBottom>
                        {props.content}
                    </Typography>
                </CardContent>
            </Card>
        </>);
}

export default RoadmapCard
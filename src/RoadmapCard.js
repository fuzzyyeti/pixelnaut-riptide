import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

const RoadmapCard = (props) =>
{
    return (
        <>
            <Box sx={{width: '100px', height: '100px',background: 'linear-gradient(#FFF, #FFF) no-repeat center/2px 100%'}}/>
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
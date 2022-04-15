import SelectOrcanaut from "./SelectOrcanaut";
import FishTank from "./FishTank";
import {useEffect, useRef, useState} from "react";

const PixelnautGame = () =>
{
    const fishTank = useRef(null);
    const [isTankEnabled, setIsTankEnable] = useState(false);
    useEffect(() => {
        if(fishTank) {
            fishTank.current.contentWindow.window.godot_ready = () => {
                console.log('godot ready');
                console.log('url', process.env.REACT_APP_GODOT_URL);
                fishTank.current.contentWindow.window.add_api_url(process.env.REACT_APP_GODOT_URL);
                setIsTankEnable(true);
            }
        }
    },[fishTank])
    return (<>
        <h1>Winner of the Riptide Hackathon Orca Community Prize</h1>
        <p>Thank you <a href={'https://orca.so'}>Orca</a>, the best DEX on Solana!</p>
        <p>Announcement: The feeding timer has been updated to one day instead of one minute and cleaning timer has been updated to one week instead of seven minutes.</p>
        <SelectOrcanaut enabled={isTankEnabled} fishTank={fishTank}/>
        <FishTank enabled={isTankEnabled} ref={fishTank}/>
    </>);
}

export default PixelnautGame

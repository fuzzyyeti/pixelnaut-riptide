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
        <SelectOrcanaut enabled={isTankEnabled} fishTank={fishTank}/>
        <FishTank enabled={isTankEnabled} ref={fishTank}/>
    </>);
}

export default PixelnautGame
import SelectOrcanaut from "./SelectOrcanaut";
import FishTank from "./FishTank";
import {useEffect, useRef} from "react";

const PixelnautGame = () =>
{
    const fishTank = useRef(null);
    useEffect(() => {
        if(fishTank) {
            fishTank.current.contentWindow.window.godot_ready = () => {
                console.log('godot ready');
                console.log('url', process.env.REACT_APP_GODOT_URL);
                fishTank.current.contentWindow.window.add_api_url(process.env.REACT_APP_GODOT_URL);
            }
        }
    },[fishTank])
    return (<>
        <SelectOrcanaut fishTank={fishTank}/>
        <FishTank ref={fishTank}/>
    </>);
}

export default PixelnautGame
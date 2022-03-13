import SelectOrcanaut from "./SelectOrcanaut";
import FishTank from "./FishTank";
import {useRef} from "react";

const PixelnautGame = () =>
{
    const fishTank = useRef(null);
    return (<>
        <SelectOrcanaut fishTank={fishTank}/>
        <FishTank ref={fishTank}/>
    </>);
}

export default PixelnautGame
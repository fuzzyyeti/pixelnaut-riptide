import {useConnection, useWallet} from "@solana/wallet-adapter-react";
import {useEffect, useState} from "react";
import {getParsedNftAccountsByOwner} from "@nfteyez/sol-rayz";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import OrcanautCard from "./OrcanautCard"
const ORCANAUT_UPDATE_AUTHORITY = "79SQqm8SUyLR21cXk5TEGCtkjWnN7NwBjUUY2aYUci8B"
const SelectOrcanaut = () =>
{
    const mystuff = 1
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const getOrcanaut = async (uri, mint) =>
    {
        var data = await axios.get(uri);
        return { "image": data.data.image, "mint": mint}
    }
    const [orcanauts, setOrcanauts] = useState([]);
    const [currentMint, setCurrentMint] = useState('demo');
    useEffect(() =>{
        if(publicKey){
            const getOrcanauts = async () => {
                const orcanautData = await getParsedNftAccountsByOwner({publicAddress: publicKey, connection: connection});
                setOrcanauts([]);
                orcanautData.filter(o => o.updateAuthority == ORCANAUT_UPDATE_AUTHORITY).map(
                    async o => {
                        var orcanaut = await getOrcanaut(o.data.uri, o.mint);
                        setOrcanauts(o => [orcanaut,...o])
                    });
            }
            getOrcanauts();
        }
    },[publicKey]);
    return (
        <>
            <Carousel autoPlay={false}  onChange={ (active,_) => {setCurrentMint(orcanauts[active].mint)}}>
                {
                    orcanauts.map( (item, i) => <OrcanautCard key={i} item={item} /> )
                }
            </Carousel>
            <p>Current mint = {currentMint}</p>
        </>
    )

}
export default SelectOrcanaut
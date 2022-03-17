import {useConnection, useWallet} from "@solana/wallet-adapter-react";
import {useEffect, useState} from "react";
import {getParsedNftAccountsByOwner} from "@nfteyez/sol-rayz";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import OrcanautCard from "./OrcanautCard"
const ORCANAUT_UPDATE_AUTHORITY = "79SQqm8SUyLR21cXk5TEGCtkjWnN7NwBjUUY2aYUci8B"
const SelectOrcanaut = (props) =>
{
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const getOrcanaut = async (uri, mint) =>
    {
        var data = await axios.get(uri);
        return { "image": data.data.image, "mint": mint}
    }
    const [orcanauts, setOrcanauts] = useState([]);
    const [currentMint, setCurrentMint] = useState('9eohkfSjLNd7GfU7wMoDA5RakpWbzHEodikdik9NHuMW');

    useEffect(() =>
        {
            if(props.enabled){
                props.fishTank.current.contentWindow.window.add_mint(currentMint);
            }

        },[currentMint,props.enabled]
    );

    useEffect(() =>{
        if(publicKey){
            const getOrcanauts = async () => {
                const orcanautData = await getParsedNftAccountsByOwner({publicAddress: publicKey, connection: connection});
                setOrcanauts([]);
                orcanautData.filter(o => o.updateAuthority == ORCANAUT_UPDATE_AUTHORITY).map(
                    async o => {
                        var orcanaut = await getOrcanaut(o.data.uri, o.mint);
                        setOrcanauts(o => {
                            if(o.length === 0)
                            {
                                console.log('setting first mint', orcanaut.mint);
                                setCurrentMint(orcanaut.mint);
                            }
                            return [...o, orcanaut];
                        })
                    });
            }
            getOrcanauts();
        }
    },[publicKey]);
    return (
        <>
            <h2>{publicKey && orcanauts.length != 0  && "Choose your pixelnaut"}</h2>
            <h2>{!publicKey && "Connect your wallet with an Orcanaut to play"}</h2>
            <h2>{publicKey && orcanauts.length === 0 && <a  target="_blank" href={'https://magiceden.io/marketplace/orcanauts'}>Purchase an orcanaut to play</a>}</h2>
            <Carousel autoPlay={false} prev={(active,_) => {setCurrentMint(orcanauts[active].mint)}} next={ (active,_) => {setCurrentMint(orcanauts[active].mint)}}>
                {
                    orcanauts.map( (item, i) => <OrcanautCard key={i} item={item} /> )
                }
            </Carousel>
        </>
    )

}
export default SelectOrcanaut
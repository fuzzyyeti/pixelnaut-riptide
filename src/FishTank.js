import React, {ForwardedRef, LegacyRef, useEffect, useState} from "react";

const FishTank = React.forwardRef((props, ref) =>
{
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {width: width, height: height};
    }

    const [windowDimmensions, setWindowDimensions] = useState(getWindowDimensions())

    useEffect(() => {
        const handleResize = () =>
        {
            setWindowDimensions(getWindowDimensions);
        }
        window.addEventListener('resize', handleResize);
    },[])

    return (
        <>
            <iframe ref={ref}
                    width={windowDimmensions.width * .6}
                    height={windowDimmensions.width * .3}
                    src={process.env.PUBLIC_URL + "GodotApp/PixelnautPets.html"}
                    scrolling={'no'}
            ></iframe>
        </>

    )
});

export default FishTank
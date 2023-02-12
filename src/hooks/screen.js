import { useState,useEffect } from "react";

export default function useScreen(){
    const [screenWidth, setScreenWidth] = useState();
    const [fixedWidth, setFixedWidth] = useState();
    const handleScreenWidth = () => {
        const { innerWidth } = window;
        setScreenWidth(innerWidth)
    }
    const handleOnLoad = () => {
        const { innerWidth } = window;
        setFixedWidth(innerWidth)
    }

    useEffect(() => {
        handleOnLoad();
        window.addEventListener('resize', handleScreenWidth)
    }, []);
    return [screenWidth,fixedWidth]
}
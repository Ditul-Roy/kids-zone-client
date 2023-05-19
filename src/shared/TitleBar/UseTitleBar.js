import { useEffect } from "react";

const useTitleBar = title =>{
    useEffect(()=>{
        document.title = `${title} - kidsZone`
    },[title])
}
export default useTitleBar;
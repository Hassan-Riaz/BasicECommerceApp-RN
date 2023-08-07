import { useCallback, useState } from "react";

//**
 //* Use this hook to force screen or component to re-render 
 //**/
export function useForceUpdate() {
    const [, setTick] = useState(0);
    const update = useCallback(() => {
        setTick(tick => tick + 1);
    }, [])
    return update;
}
import React, { useEffect } from "react";
import useScroll from "./useScroll";

const useAnimateIn = (scrollAt: number, animation_name: string, ref: React.MutableRefObject<HTMLElement | undefined>) => {
    const [scroll] = useScroll();
    useEffect(() => {
        if (scroll[1] >= scrollAt && ref.current) {
               ref.current.classList.remove("d-none")
               ref.current.classList.add(animation_name)
        }
    }, [scroll, ref])
    useEffect(() => {
        if (ref.current)
            ref.current.classList.add("d-none")
    }, [ref])
}

export default useAnimateIn;
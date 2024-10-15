import { useEffect, useState } from "react"

const useScroll = () => {
    const [scroll, updateScroll] = useState([0, 0]);
    useEffect(() => {
        const throttle = () => {
            updateScroll([window.scrollX, window.scrollY]);
        }
        window.addEventListener('scroll', throttle)
        return () => window.removeEventListener('scroll', throttle);
    })
    return [scroll] as const;
}

export default useScroll;
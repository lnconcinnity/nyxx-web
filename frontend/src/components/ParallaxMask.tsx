

import React, { ReactNode } from "react"
import { EffectString, Parallax } from "react-scroll-parallax"

export interface ParallaxMaskProps {
    className?: string,
    style?: {},
    children: ReactNode,

    overflow?: string,

    speed?: number,
    translateX?: EffectString,
    translateY?: EffectString,
    rotateX?: EffectString,
    rotateY?: EffectString,
    rotateRoll?: EffectString,
}

const ParallaxMask = ({ className, children, speed, translateY, translateX, rotateX, rotateY, rotateRoll, overflow, style }: ParallaxMaskProps) => {
    return (
        <Parallax speed={speed} translateX={translateX} translateY={translateY} rotateX={rotateX} rotateY={rotateY} rotateZ={rotateRoll} className={`overflow-${overflow} w-100 h-100` + (className ? " "+className : "")} style={style ? Object.assign({}, style) : undefined}>
            { children }
        </Parallax>
    )
}

export default ParallaxMask;
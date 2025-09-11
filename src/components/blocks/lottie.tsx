"use client"

import React, { FC } from "react"
import Lottie, { LottieComponentProps } from "lottie-react"

const LottieRenderer: FC<LottieComponentProps> = ({ ...props }) => {
    return <Lottie {...props} />
}

export default LottieRenderer

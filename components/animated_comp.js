"use client"; // Add this line to declare that this component runs on the client

import Lottie from "lottie-react";
import animation from "../public/assets/earth.json"

import React from 'react'

export const Earth = () => {
  return (
    <div className="flex items-center justify-center">
        <Lottie animationData={animation} style={{ width: "400px", height: "400px" }} />
    </div>
  )
}

import React from "react"

export const TimelineEvent = ({ title, date, description, isLeft }) => {
  return (
    <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? "flex-row-reverse" : ""}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{isLeft ? "◀" : "▶"}</h1>
      </div>
      <div className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
        <time className="mb-3 font-normal text-sm text-gray-400">{date}</time>
        <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{description}</p>
      </div>
    </div>
  )
}


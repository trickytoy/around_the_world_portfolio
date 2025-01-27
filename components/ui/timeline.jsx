import React from "react"


export const Timeline = ({ experiences }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="relative border-l-2 border-blue-400 pl-8 ml-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-12 relative">
            <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-10 top-1 shadow-lg shadow-blue-400/50"></div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-white/20">
              <h3 className="text-xl font-bold text-white">{exp.position}</h3>
              <h4 className="text-lg text-blue-300">{exp.company}</h4>
              <time className="text-sm text-gray-300">{exp.date}</time>
              <ul className="mt-2 text-gray-200 list-disc list-inside">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="mb-1">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


import React from 'react'

const Skills = () => {
  return (
    <>
      {/* Skills */}
        <section id="skills" className="bg-black/40 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-10 text-teal-500">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {["HTML", "CSS", "JavaScript","Ejs", "React","React Router", "Redux", "Figma", "Tailwind","Bootstrap", "Node.js", "Express.Js", "MongoDB","GitHub","Next.Js","Heroku"].map((skill) => (
                <div key={skill} className="p-4 rounded-xl bg-linear-to-t from-sky-500 to-indigo-500 font-semibold dark:bg-gray-800 text-center hover:scale-105 transition">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}

export default Skills

const skills = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Styling",
    skills: ["CSS Modules", "SASS/SCSS", "Tailwind"],
  },
  {
    title: "Other",
    skills: ["Git", "Node.js", "SQL", "MongoDB", "REST API"],
  },
];

export default function Skills() {
  return (
    <section className="space-y-6" id="skills">
      <h2 className="text-2xl font-bold">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        {skills.map((category) => (
          <div
            key={category.title}
            className="bg-neutral-900/50 p-6 rounded-xl transition-colors duration-300 shadow-xl shadow-blue-500/20"
          >
            <h3 className="font-bold text-xl text-neutral-200 mb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-neutral-400 bg-neutral-800 rounded-md px-2 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

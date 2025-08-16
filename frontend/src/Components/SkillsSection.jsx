import { Key } from "lucide-react";
import React, { act, useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "Next.js", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },

  //Backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "GraphQL", level: 75, category: "Backend" },
  //Tools
  { name: "Git/GiHub", level: 90, category: "Tools" },
  { name: "Docker", level: 80, category: "Tools" },
  { name: "Figma", level: 85, category: "Tools" },
  { name: "VSCode", level: 85, category: "Tools" },
];
const categories = ["all", "Frontend", "Backend", "Tools"];

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-xl font-semibold ">{skill.name}</h3>
              </div>

              <div className="flex items-center">
                <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                  <div
                    className={cn(
                      "bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-in-out ]"
                    )}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

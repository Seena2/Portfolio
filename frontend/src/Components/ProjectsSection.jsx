import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "MERN based AI App",
    description:
      "AI-powered application built with the MERN stack, featuring intelligent automation and seamless user experience.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Python", "Express", "MongoDB", "AI"],
    demo: "#URL_to_live_demo_for_project1",
    github: "#URL_to_GitHub_repo_for_project1",
  },
  {
    id: 2,
    title: "Orbit Analytics dashboard",
    description:
      " Interactive dashboard with data visualization and filtering capabilities built using modern web technologies.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demo: "#URL_to_live_demo_for_project2",
    github: "#URL_to_GitHub_repo_for_project2",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform enabling users to browse products, manage carts, and securely complete purchases. Includes admin tools for authentication, payment processing, inventory and order management.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI"],
    demo: "#URL_to_live_demo_for_project3",
    github: "#URL_to_GitHub_repo_for_project3",
  },
];
function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured<span className="text-primary ml-2">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my most recent and impactful projects, demonstrating my
          skills and expertise in various technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium border bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Seena2"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

import { Briefcase, Code, User } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About
          <span className="ml-3 text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="spce-y-6">
            <h3 className="text-2xl font-semibold">Web Developer</h3>
            <p className="text-muted-foreground text-justify mb-3">
              with over 5 years of experaince in web development, I specialize
              in creating responsive,accessible, and performant web applications
              using modern technologies. My expertise spans both frontend and
              backend development, enabling me to design, build, and maintain
              scalable solutions from concept to deployment. I am passionate
              about solving complex problems, collaborating with
              cross-functional teams, and continuously learning new tools and
              frameworks to deliver high-quality software.
            </p>
            <p className="text-muted-foreground text-justify">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              industry. My goal is to
              <span className="font-semibold">
                {" "}
                empower people and businesses by building software that solves
                real-world problems, improves lives, and drives innovation.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in touch
              </a>
              <a
                href="#path_to_resume"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:text-foreground transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and accessible web applications with
                    modern web frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UX/UI</h4>
                  <p className="text-muted-foreground">
                    Designing user-friendly interfaces and experiences for web
                    applications
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion, ensuring
                    timely delivery and stakeholder satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

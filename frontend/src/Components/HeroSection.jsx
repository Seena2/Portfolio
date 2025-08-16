import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1> */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary ml-4 opacity-0 animate-fade-in-delay-1">
              Seena
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            professional Software Engineer, specialized in full-stack
            development with a knack for creating stunning web applications with
            modern technologies.
          </p>
          <div className=" p-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View my work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mbt-2">Scroll</span>
        <ArrowDown className="w-6 h-6 text-primary mt-2 animate-bounce" />
      </div>
    </section>
  );
}

export default HeroSection;

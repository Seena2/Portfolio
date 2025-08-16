import { ArrowUp } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="Py-12 px-4 bg-card relative border-t border-border text-center mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy;{new Date().getFullYear()} Seena.co, All rights reserved
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
      >
        <ArrowUp />
      </a>
    </footer>
  );
}

export default Footer;

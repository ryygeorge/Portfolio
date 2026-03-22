import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Projects", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-5 bg-background/70 backdrop-blur-xl border-b border-border/50"
    >
      <button
        onClick={() => scrollTo("hero")}
        className="font-display text-lg font-bold tracking-tight text-foreground"
      >
        <span className="text-gradient">{"<"}</span>
        Ryan
        <span className="text-gradient">{" />"}</span>
      </button>

      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollTo(item)}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              {item}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 text-sm font-display font-semibold bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            Hire Me
          </button>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left py-3 text-lg font-display text-foreground hover:text-accent transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navigation() {
  return (
    <nav className="backdrop-blur-md px-12 bg-zinc-950/50 border-b border-zinc-800">
      <ul className="flex gap-8 h-16 max-w-5xl mx-auto items-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className=" text-neutral-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

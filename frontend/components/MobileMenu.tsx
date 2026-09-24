type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`overflow-hidden border-t border-[#d9cab3]/70 bg-[#fffdf7] transition-all duration-300 md:hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#2B2118] transition-colors hover:bg-[#f5eede] hover:text-[#3E2723]"
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={onClose}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[#3E2723] px-4 py-3 text-sm font-semibold text-[#F7F1E3] shadow-sm"
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
}

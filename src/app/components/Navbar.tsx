import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  ShoppingCart,
} from "lucide-react";

const orange = "#ef4d23";
const navItems = ["Home", "Features", "About", "Pages"];

function Logo() {
  const petals = Array.from({ length: 8 }).map((_, index) => {
    const angle = (index / 8) * Math.PI * 2;
    return {
      x: 16 + Math.cos(angle) * 10,
      y: 16 + Math.sin(angle) * 10,
    };
  });

  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
      aria-label="Convix Software"
      role="img"
    >
      {petals.map((petal, index) => (
        <circle key={index} cx={petal.x} cy={petal.y} r="3.5" fill={orange} />
      ))}
      <circle cx="16" cy="16" r="3.5" fill={orange} />
    </svg>
  );
}

function NavLink({ item, mobile = false }: { item: string; mobile?: boolean }) {
  const isHome = item === "Home";
  const isPages = item === "Pages";

  return (
    <button
      type="button"
      className={`flex items-center gap-1.5 text-left text-sm font-medium ${
        isPages ? "text-[#ef4d23]" : "text-neutral-900"
      } ${mobile ? "w-full rounded-xl px-3 py-2 hover:bg-neutral-50" : ""}`}
    >
      {isHome && <span className="h-[1.5px] w-[1.5px] rounded-full bg-black" />}
      <span>{item}</span>
      {isPages && <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-center px-3 pt-4 sm:px-4 sm:pt-6">
      <div className="relative flex w-full max-w-[760px] items-center rounded-full border border-neutral-200 bg-white py-2 pl-2 pr-2 shadow-sm">
        <Logo />

        <div className="ml-8 hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item} item={item} />
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-neutral-900 hover:bg-neutral-50 md:flex"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#ef4d23] py-1.5 pl-4 pr-1.5 text-sm font-medium text-white"
          >
            <span className="hidden sm:inline">Get early access</span>
            <span className="sm:hidden">Early access</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <ChevronRight className="h-4 w-4" />
            </span>
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-900 hover:bg-neutral-50 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="absolute left-2 right-2 top-full z-20 mt-2 rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <NavLink key={item} item={item} mobile />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

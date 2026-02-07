import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Paintings", path: "/paintings" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const MusealNav = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-full w-nav flex-col justify-between px-8 py-10">
      {/* Artist name */}
      <NavLink
        to="/"
        className="font-serif text-sm tracking-widest uppercase text-black opacity-90 hover:opacity-100 transition-opacity duration-500 text-halo-light"
      >
        Birgit
        <br />
        Weitner
      </NavLink>

      {/* Navigation links */}
      <ul className="flex flex-col gap-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `font-body text-xs tracking-[0.2em] uppercase transition-all duration-500 relative group text-halo-light ${
                  isActive
                    ? "text-black"
                    : "text-black/60 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                <span className="flex items-center gap-3">
                  <span
                    className={`inline-block h-[3px] rounded-full bg-current transition-all duration-500 ${
                      isActive ? "w-4" : "w-0 group-hover:w-2"
                    }`}
                  />
                  {item.label}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Bottom — Studio label */}
      <span className="font-body text-[10px] tracking-[0.3em] uppercase text-black/60 text-halo-light">
        Studio
      </span>
    </nav>
  );
};

export default MusealNav;

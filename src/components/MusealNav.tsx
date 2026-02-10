import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Werke", path: "/werke" },
  { label: "Bio", path: "/bio" },
  { label: "Kontakt", path: "/kontakt" },
];

const MusealNav = () => {
  return (
    <nav
      className="
        fixed left-0 top-0 z-50
        h-full w-nav
        flex flex-col justify-between
        px-8 py-10
      "
    >
      {/* Artist name */}
      <NavLink
        to="/"
        className="
          inline-block
          font-serif text-sm tracking-widest uppercase
          text-black
          transition-opacity duration-500
          opacity-90 hover:opacity-100
        "
      >
        <span
          className="
            inline-block
            px-2 py-1
            bg-white/50
            backdrop-blur-[2px]
          "
        >
          Birgit
          <br />
          Weitner
        </span>
      </NavLink>

      {/* Navigation links */}
      <ul className="flex flex-col gap-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `
                group inline-block
                font-body text-xs uppercase tracking-[0.2em]
                transition-all duration-300
                text-black
              `
              }
            >
              {({ isActive }) => (
                <span
                  className={`
                    inline-flex items-center gap-3
                    px-2 py-1

                    bg-white/45
                    backdrop-blur-[2px]

                    transition-all duration-300

                    ${
                      isActive
                        ? "bg-white/65"
                        : "hover:bg-white/65"
                    }
                  `}
                >
                  {/* Indicator line */}
                  <span
                    className={`
                      inline-block h-[3px] rounded-full bg-black
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-4"
                          : "w-0 group-hover:w-2"
                      }
                    `}
                  />
                  {item.label}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Bottom — Studio label (link to Atelier page) */}
      <NavLink
        to="/atelier"
        className="
          inline-block
          font-body text-[10px] uppercase tracking-[0.3em]
          text-black
          transition-opacity duration-200
          hover:opacity-80
        "
      >
        <span
          className="
            inline-block
            px-2 py-1
            backdrop-blur-sm
          "
        >
          Atelier
        </span>
      </NavLink>
    </nav>
  );
};

export default MusealNav;

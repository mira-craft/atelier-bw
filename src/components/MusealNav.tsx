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
        <li key="home">
          <NavLink
            to="/"
            className="
              group inline-block
              transition-all duration-300
              text-black
            "
          >
            <span
              className="
                inline-flex items-center justify-center
                px-3 py-1.5

                bg-white/45
                backdrop-blur-[2px]
                
                transition-all duration-300
                group-hover:bg-white/65
                
                opacity-70 group-hover:opacity-100
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
              </svg>
            </span>
          </NavLink>
        </li>
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

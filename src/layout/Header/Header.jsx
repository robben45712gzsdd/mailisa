import { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Header() {
  const menuData = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/about" },
    {
      label: "Dịch vụ",
      children: [
        {
          label: "Phun xăm thẩm mỹ",
          children: [
            { label: "Phun môi collagen", href: "/services/phun-moi" },
            { label: "Điêu khắc chân mày", href: "/services/dieu-khac" },
            { label: "Phun mí mắt", href: "/services/phun-mi" },
          ],
        },
        {
          label: "Điều trị da",
          children: [
            { label: "Trị nám", href: "/services/tri-nam" },
            { label: "Trị mụn", href: "/services/tri-mun" },
          ],
        },
      ],
    },
    { label: "Tin tức", href: "/news" },
    { label: "Liên hệ", href: "/contact" },
  ];

  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-8 py-3">
        <Link to="/" className="text-2xl font-bold text-primary">
          Mailisa
        </Link>

        <nav className="relative">
          <ul className="flex items-center gap-6">
            {menuData.map((menu, i) => (
              <li
                key={i}
                className="relative group"
                onMouseEnter={() => setOpenMenu(i)}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  setOpenSubMenu(null);
                }}
              >
                <div className="flex items-center gap-1 cursor-pointer text-gray-800 hover:text-primary transition">
                  {menu.href ? (
                    <Link to={menu.href}>{menu.label}</Link>
                  ) : (
                    <>
                      <span>{menu.label}</span>
                      {menu.children && (
                        <ExpandMoreIcon
                          fontSize="small"
                          className="mt-[2px] w-4 h-4"
                        />
                      )}
                    </>
                  )}
                </div>

                {menu.children && openMenu === i && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-64 py-2 border border-gray-100 animate-fade-in">
                    {menu.children.map((submenu, j) => (
                      <li
                        key={j}
                        className="relative px-4 py-2 hover:bg-gray-50"
                        onMouseEnter={() => setOpenSubMenu(j)}
                        onMouseLeave={() => setOpenSubMenu(null)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-800 font-medium hover:text-primary transition">
                            {submenu.label}
                          </span>
                          {submenu.children && (
                            <ExpandMoreIcon
                              fontSize="small"
                              className="rotate-[-90deg] text-gray-500 w-4 h-4"
                            />
                          )}
                        </div>

                        {submenu.children && openSubMenu === j && (
                          <ul className="absolute top-0 left-full bg-white shadow-lg rounded-md w-56 py-2 border border-gray-100 animate-fade-in">
                            {submenu.children.map((child, k) => (
                              <li key={k}>
                                <Link
                                  to={child.href}
                                  className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

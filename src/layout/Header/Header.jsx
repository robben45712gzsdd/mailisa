import { useState } from "react";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logoBg from "@/assets/imgs/bg_logo.png";
import logoBgSubMenu from "@/assets/imgs/bg_sub_menu.jpg";
import { LogoIcon } from "@/assets/icons";

export default function Header() {
  const menuData = [
    {
      label: "Giới thiệu",
      href: "/",
      children: [
        {
          label: "LỊCH SỬ HÌNH THÀNH PHÁT TRIỂN MAILISA",
          href: "/lich-su-hinh-thanh-phat-trien-mailisa/",
          children: [
            {
              label: "ENGLISH VERSION",
              href: "/history-of-mailisa-formation/",
            },
          ],
        },
        {
          label: "QUÁ TRÌNH THIỆN NGUYỆN MAILISA",
          href: "/qua-trinh-thien-nguyen-mailisa/",
        },
      ],
    },
    {
      label: "Phun màu thẩm mỹ",
      href: "/phun-mau-tham-my/",
      children: [
        {
          label: "Phun Mày Brow Couture",
          href: "/phun-xam-tham-my/phun-may-brow-couture/",
        },
        {
          label: "Phun Môi SILK LIP",
          href: "/phun-moi-mailisa/",
        },
        {
          label: "Phun mí mở tròng",
          href: "/phun-xam-tham-my/phun-mi-mo-trong/",
        },
        {
          label: "Xóa sửa mày",
          href: "/phun-xam-tham-my/xoa-sua-may/",
        },
        {
          label: "Xóa sửa môi",
          href: "/phun-xam-tham-my/xoa-sua-moi/",
        },
        {
          label: "Xóa sửa mí",
          href: "/phun-xam-tham-my/xoa-sua-mi/",
        },
      ],
    },
    {
      label: "Điều trị da",
      href: "/dieu-tri-da-tai-tham-my-vien-mailisa/",
      children: [
        {
          label: "Điều trị nám đinh",
          href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-nam-dinh/",
        },
        {
          label: "Điều trị nám mảng",
          href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-nam-mang/",
        },
        {
          label: "Điều trị đồi mồi",
          href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-doi-moi-cong-nghe/",
        },
        {
          label: "Điều trị bớt sắc tố",
          href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-bot-sac-to-cnc/",
        },
        {
          label: "Điều trị sẹo rỗ",
          href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-seo-ro-cong-nghe-cao/",
        },
        {
          label: "Điều trị tàn nhang",
          href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-tan-nhang/",
        },
        {
          label: "Điều trị da mụn",
          href: "/dieu-tri-da-tai-tham-my-vien-mailisa/dieu-tri-da-mun-cong-nghe-cao/",
        },
        { label: "Xóa Nốt Ruồi", href: "/xoa-not-ruoi/" },
        { label: "Xóa Mụn Thịt", href: "/xoa-mun-thit/" },
      ],
    },
    {
      label: "Phẫu thuật",
      href: "/phau-thuat-tham-my/",
      children: [
        {
          label: "Nâng cung chân mày Perfect Form",
          href: "/phau-thuat-tham-my/nang-cung-chan-may/",
        },
        {
          label: "Tạo hình mắt 2 mí Perfect Line",
          href: "/phau-thuat-tham-my/tao-hinh-mat-2-mi/",
        },
        {
          label: "Khâu tạo hình mắt 2 mí",
          href: "/phau-thuat-tham-my/khau-tao-hinh-2-mi/",
        },
        {
          label: "Phẫu thuật cắt da dư lấy bọng mỡ mi dưới",
          href: "/phau-thuat-tham-my/cat-da-du-mi-duoi/",
        },
        {
          label: "Phẫu thuật Nâng mũi",
          href: "/phau-thuat-tham-my/nang-mui/",
        },
        {
          label: "Phẫu thuật thu gọn cánh mũi",
          href: "/phau-thuat-tham-my/cuon-canh-mui/",
        },
        {
          label: "Căng Da Mặt Siết Cơ Bằng Chỉ",
          href: "/cang-da-mat-siet-co-bang-chi-mailisa/",
        },
        {
          label: "Dịch Vụ Làm Đẹp Bằng Filler",
          href: "/lam-dep-bang-filler/",
        },
        {
          label: "Dịch Vụ Làm Đẹp Bằng Botox",
          href: "/lam-dep-bang-botox/",
        },
        {
          label: "Thu gọn môi dày",
          href: "/phau-thuat-tham-my/thu-gon-moi-day/",
        },
        {
          label: "Độn cằm",
          href: "/phau-thuat-tham-my/don-cam/",
        },
      ],
    },
    {
      label: "Mỹ phẩm",
      href: "/nhom-san-pham-mailisa/",
      children: [
        {
          label: "Tất Cả Sản Phẩm Mailisa",
          href: "/san-pham-mailisa/",
        },
      ],
    },
    {
      label: "Đào tạo",
      href: "/trang-dao-tao/",
      children: [
        {
          label: "Chăm sóc da",
          href: "/trang-dao-tao/dao-tao-cham-soc-da/",
        },
        {
          label: "Phun màu thẩm mỹ",
          href: "/trang-dao-tao/dao-tao-phun-mau-tham-my/",
        },
      ],
    },
    {
      label: "Liên hệ",
      href: "/dia-chi-mailisa-thong-tin-lien-he/",
    },
  ];

  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <header className="top-0 left-0 z-50 fixed bg-white shadow-md w-full h-[130px]">
      <div className="flex flex-col items-center mx-auto px-8 container">
        <div
          className="flex justify-center items-center bg-contain bg-no-repeat bg-center w-full h-[4.5rem] text-center"
          style={{ backgroundImage: `url(${logoBg})` }}
        >
          <LogoIcon fill="#fff" className="w-[80px] h-auto" />
        </div>

        <nav className="relative mx-auto border-primary-dark border-t w-max">
          <ul className="flex items-center gap-6 p-4 font-bold uppercase">
            {menuData.map((menu, i) => (
              <li
                key={i}
                className="group relative"
                onMouseEnter={() => setOpenMenu(i)}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  setOpenSubMenu(null);
                }}
              >
                <div className="flex items-center gap-1 transition cursor-pointer">
                  <NavLink
                    to={menu.href}
                    className={({ isActive }) =>
                      `relative group flex items-center gap-1 transition-colors duration-200
                        after:content-[''] after:absolute after:left-0 after:bottom-[-3px]
                        after:h-[2px] after:w-0 after:bg-[var(--color-primary)] after:transition-all after:duration-300
                        hover:after:w-full
                        ${
                          isActive
                            ? "text-primary after:w-full"
                            : "text-primary-dark hover-text-primary"
                        }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* text label */}
                        <span>{menu.label}</span>

                        {/* icon */}
                        {menu.children && (
                          <ExpandMoreIcon
                            fontSize="small"
                            className={`mt-[2px] w-4 h-4 transform transition-transform duration-700 ease-in-out 
              ${
                isActive
                  ? "text-primary rotate-0"
                  : "text-primary-dark group-hover-text-primary group-hover:rotate-0 rotate-[-90deg]"
              }`}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </div>

                {menu.children && openMenu === i && (
                  <ul
                    style={{ backgroundImage: `url(${logoBgSubMenu})` }}
                    className="absolute top-full left-0 shadow-lg rounded-md mt-3 -translate-y-[1px] w-64 py-2 border border-gray-100 animate-fade-in z-50
               before:content-[''] before:absolute before:top-[-12px] before:left-0 before:w-full before:h-4 before:bg-transparent"
                  >
                    {menu.children.map((submenu, j) => (
                      <li
                        key={j}
                        className="relative px-4 py-2"
                        onMouseEnter={() => setOpenSubMenu(j)}
                        onMouseLeave={() => setOpenSubMenu(null)}
                      >
                        <div className="flex justify-between items-center">
                          <NavLink
                            to={submenu.href}
                            className={({ isActive }) =>
                              `flex justify-between items-center w-full transition-colors duration-200 ${
                                isActive
                                  ? "text-primary"
                                  : "text-white hover:text-yellow-400"
                              }`
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <span>{submenu.label}</span>
                                {submenu.children && (
                                  <ExpandMoreIcon
                                    fontSize="small"
                                    className={`rotate-[-90deg] w-4 h-4 ${
                                      isActive ? "text-primary" : "text-white"
                                    }`}
                                  />
                                )}
                              </>
                            )}
                          </NavLink>
                        </div>

                        {submenu.children && openSubMenu === j && (
                          <ul
                            style={{
                              backgroundImage: `url(${logoBgSubMenu})`,
                            }}
                            className="top-0 left-full absolute shadow-lg px-4 py-2 border border-gray-100 rounded-md w-56 animate-fade-in"
                          >
                            {submenu.children.map((child, k) => (
                              <li key={k}>
                                <NavLink
                                  to={child.href}
                                  className={({ isActive }) =>
                                    `text-white hover:text-yellow-400 transition-colors duration-200 ${
                                      isActive ? "text-primary" : ""
                                    }`
                                  }
                                >
                                  {child.label}
                                </NavLink>
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

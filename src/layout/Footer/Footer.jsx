import React from "react";
import facebookIcon from "@/assets/imgs/fb.png";
import youtubeIcon from "@/assets/imgs/youtube.png";
import zaloIcon from "@/assets/imgs/zalo.png";
import tiktokIcon from "@/assets/imgs/tiktok.png";
import instagramIcon from "@/assets/imgs/intar.png";
import congThuongIcon from "@/assets/imgs/cong-thuong.png";
import circleImage from "@/assets/imgs/pattern_new_1.png";

const branches = [
  {
    city: "TP Hồ Chí Minh",
    map: "https://maps.app.goo.gl/CSANkRLfcbpeKC8t7",
    address:
      "TP. Hồ Chí Minh: Số 86-88-92 Huỳnh Văn Bánh, Phường 15, Quận Phú Nhuận, TP. Hồ Chí Minh",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 0305201737-002 Cấp Ngày 12/07/2019",
  },
  {
    city: "Hà Nội",
    map: "https://maps.app.goo.gl/dvoRtg8GfXeu9TcY8",
    address:
      "Số 6 Đường Nguyễn Khánh Toàn, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 0108367003 Cấp Ngày 17/07/2018",
  },
  {
    city: "Bình Dương",
    map: "https://maps.app.goo.gl/4Rie1tGXVS9RHHGU7",
    address:
      "Bình Dương: Số E3/16 Tổ 32, KP. Bình Thuận 2, P. Thuận Giao, TP. Thuận An, Bình Dương",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 3702683218 Cấp Ngày 13/07/2018",
  },
  {
    city: "Đà Nẵng",
    map: "https://maps.app.goo.gl/AXp14H8u5sXcVhTY6",
    address:
      "97-99 Đường Nguyễn Văn Linh, Phường Phước Ninh, Quận Hải Châu, TP. Đà Nẵng, Việt Nam",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 0402048629 Cấp Ngày 30/06/2020",
  },
  {
    city: "Đắk Lắk",
    map: "https://maps.app.goo.gl/18BpK9jEhbEvnewT8",
    address: "69-71 Ngô Quyền, Tân Lợi, TP. Buôn Ma Thuột, Đắk Lắk, Việt Nam",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 6001511110 Cấp Ngày 22/05/2017",
  },
  {
    city: "Nghệ An",
    map: "https://maps.app.goo.gl/We8ht3qyk1joTx198",
    address:
      "132 Nguyễn Văn Cừ, Khối Bình Phúc, Phường Hưng Phúc, TP. Vinh, Nghệ An, Việt Nam",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 0305201737-003 Cấp Ngày 24/08/2023",
  },
  {
    city: "Cần Thơ",
    map: "https://maps.app.goo.gl/ZmqGCAt6kcuWdWhR9",
    address: "67 Phan Đình Phùng, Tân An, Ninh Kiều, Cần Thơ, Việt Nam",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 1801666555 Cấp Ngày 09/04/2020",
  },
  {
    city: "Bảo Lộc",
    map: "https://maps.app.goo.gl/5s3FmwiCuY7nzVHg7",
    address: "99 Lê Hồng Phong, Phường 1, TP. Bảo Lộc, Lâm Đồng",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 3702683218-001 Cấp Ngày 23/12/2024",
  },
  {
    city: "Nha Trang",
    map: "https://maps.app.goo.gl/1mqfN5Dqmd5A3niu8",
    address: "Số 69/1 Tô Hiến Thành, Phường Tân Tiến, Nha Trang, Khánh Hòa",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 1801666555-001 Cấp Ngày 20/09/2023",
  },
  {
    city: "Phú Quốc",
    map: "https://maps.app.goo.gl/j1mpAEJHchY582zk8",
    address:
      "Số 98 Đường 30 Tháng 4, Khu phố 1, Dương Đông, Phú Quốc, Kiên Giang",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 1702269317 Cấp Ngày 11/01/2023",
  },
  {
    city: "Trường dạy nghề",
    map: "https://g.co/kgs/Ro9Anwo",
    address: "Số 81 Trần Huy Liệu, Tp. Hồ Chí Minh",
    license:
      "Giấy Chứng Nhận Đăng Kí Kinh Doanh Số 0315153345 Cấp Ngày 09/07/2018",
    phone: "Điện thoại: 02862873329",
    email: "Email: mailisacn81thl@gmail.com",
  },
];

const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/mailisagroup",
    icon: facebookIcon,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@TMVMAILISA",
    icon: youtubeIcon,
  },
  {
    name: "Zalo",
    link: "https://zalo.me/737173938000002714",
    icon: zaloIcon,
  },
  {
    name: "Tiktok",
    link: "https://www.tiktok.com/@mailisa_group",
    icon: tiktokIcon,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/thammyvienmailisa1/",
    icon: instagramIcon,
  },
];

const menuFooter = [
  { name: "Chính sách quy định chung", href: "#" },
  {
    name: "Chính sách bảo mật và thông tin",
    href: "https://mailisa.com/chinh-sach-bao-mat-thong-tin/",
  },
  {
    name: "Sở Y tế TP. Hồ Chí Minh",
    href: "https://medinet.hochiminhcity.gov.vn/default.aspx",
  },
  { name: "Tiếp nhận ý kiến khách hàng", href: "#" },
  {
    name: "Tuyển dụng",
    href: "https://mailisa.com/tham-my-vien-mailisa-tuyen-dung-tren-toan-quoc/",
  },
];

const Footer = () => {
  return (
    <footer
      className="text-white py-15 px-5 relative mt-10"
      style={{
        backgroundImage:
          "linear-gradient(to right, #3c1026 0%, #c72d70 45.5307%, #b94880 100%)",
      }}
    >
      <style>
        {`
          footer::before {
            content: '';
            position: absolute;
            top: -1.3rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 5;
            width: 100%;
            height: 4.6875rem;
            background-image: url(${circleImage});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
      <div className="max-w-[1400px] mx-auto">
        {/* Khung chứa tiêu đề + danh sách chi nhánh */}
        <div className="border border-white rounded-[15px] py-15 px-40">
          {/* Tiêu đề + nút */}
          <div className="text-center mb-8">
            <h2 className="text-[32px] font-bold uppercase mb-4">
              Địa chỉ hệ thống thẩm mỹ viện Mailisa trên toàn quốc
            </h2>
            <button className="text-[16px] font-bold uppercase bg-white text-primary-dark bold px-4 py-4 rounded-full transition">
              Toàn bộ hệ thống Mailisa
            </button>
          </div>

          <hr className="border-1 border-white mb-12 mt-12" />

          {/* Danh sách chi nhánh */}
          <div className="grid md:grid-cols-2 gap-x-30 gap-y-8">
            {branches.map((b, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-5">
                  <span className="text-lg font-bold uppercase">{b.city}</span>
                  <a
                    href={b.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:underline"
                  >
                    Xem chỉ đường
                  </a>
                </div>
                <p className="text-lg font-bold">{b.address}</p>
                <p className="text-lg font-bold">{b.license}</p>
                {b.phone && <p className="text-lg font-bold">{b.phone}</p>}
                {b.email && <p className="text-lg font-bold">{b.email}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Liên hệ + Logo + Thời gian làm việc */}
        <div className="mt-20 flex flex-col md:flex-row items-end justify-between gap-8">
          {/* Cột liên hệ */}
          <div className="flex-2 flex items-center md:items-start border-t border-b border-white pl-[30px] py-[12px]">
            <h3 className="font-bold text-white uppercase tracking-wide text-lg mr-5">
              Liên hệ
            </h3>
            <div className="flex gap-6 text-white text-lg">
              <a href="tel:0932699299" className="hover:text-yellow-300">
                0932 699 299
              </a>
              <a href="tel:0931699299" className="hover:text-yellow-300">
                0931 699 299
              </a>
            </div>
          </div>

          {/* Logo trung tâm */}
          <div className="flex flex-1 justify-center">
            <a href="https://mailisa.com/">
              <img
                src="https://mailisa.com/wp-content/uploads/2024/03/logo-footer-02.png"
                alt="Mailisa logo"
                className="w-[200px]"
              />
            </a>
          </div>

          {/* Cột thời gian làm việc */}
          <div className="flex-2 flex items-center md:items-end border-t border-b border-white pl-[30px] py-[12px]">
            <h3 className="font-bold text-white uppercase tracking-wide text-lg mr-5">
              Thời gian làm việc
            </h3>
            <p className="text-white text-lg">7:30 - 18:00 (Từ thứ 2 - CN)</p>
          </div>
        </div>

        {/* Menu footer */}
        <ul className="relative flex flex-wrap justify-between items-center gap-x-10 gap-y-2 mt-10 text-xl text-white font-light">
          {menuFooter?.map((item, i, arr) => (
            <li key={i} className="relative flex items-center">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-text-primary transition-colors duration-200"
              >
                {item.name}
              </a>

              {/* Dấu chấm gradient – chỉ hiển thị nếu không phải phần tử cuối */}
              {i < arr.length - 1 && (
                <span
                  className="absolute right-[-1.25rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #b99455 0%, #fbf5ab 40%, #d2ab53 67%, #bc872c 85%, #a15d25 100%)",
                  }}
                ></span>
              )}
            </li>
          ))}
        </ul>

        {/* Mạng xã hội */}
        <div className="text-center mt-10">
          <h3
            className="text-lg font-bold uppercase mb-4 text-white"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
          >
            Theo dõi Mailisa
          </h3>

          <div className="flex justify-center gap-4 flex-wrap">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-110"
                title={s.name}
              >
                <img
                  src={s.icon}
                  alt={s.name}
                  className="w-[53px] h-[53px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Logo bộ công thương */}
        <div className="mt-8 flex justify-center">
          <a
            href="http://online.gov.vn/Home/WebDetails/54481"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={congThuongIcon} alt="Bộ công thương" className="w-40" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

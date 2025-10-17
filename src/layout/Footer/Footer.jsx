import React from "react";

const branches = [
  {
    city: "TP Hồ Chí Minh",
    map: "https://maps.app.goo.gl/CSANkRLfcbpeKC8t7",
    address:
      "Số 86-88-92 Huỳnh Văn Bánh, Phường 15, Quận Phú Nhuận, TP. Hồ Chí Minh",
    license: "Giấy CN ĐKKD Số 0305201737-002 Cấp Ngày 12/07/2019",
  },
  {
    city: "Hà Nội",
    map: "https://maps.app.goo.gl/dvoRtg8GfXeu9TcY8",
    address:
      "Số 6 Đường Nguyễn Khánh Toàn, Quan Hoa, Cầu Giấy, Hà Nội, Việt Nam",
    license: "Giấy CN ĐKKD Số 0108367003 Cấp Ngày 17/07/2018",
  },
  {
    city: "Bình Dương",
    map: "https://maps.app.goo.gl/4Rie1tGXVS9RHHGU7",
    address:
      "Số E3/16 Tổ 32, KP. Bình Thuận 2, P. Thuận Giao, TP. Thuận An, Bình Dương",
    license: "Giấy CN ĐKKD Số 3702683218 Cấp Ngày 13/07/2018",
  },
  // ... thêm các chi nhánh khác tương tự
];

const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/mailisagroup",
    icon: "https://mailisa.com/wp-content/uploads/2024/03/145.png",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@TMVMAILISA",
    icon: "https://mailisa.com/wp-content/uploads/2024/03/yotube.png",
  },
  {
    name: "Zalo",
    link: "https://zalo.me/737173938000002714",
    icon: "https://mailisa.com/wp-content/uploads/2024/03/zalo-1.png",
  },
  {
    name: "Tiktok",
    link: "https://www.tiktok.com/@mailisa_group",
    icon: "https://mailisa.com/wp-content/uploads/2024/03/tiktok.png",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/thammyvienmailisa1/",
    icon: "https://mailisa.com/wp-content/uploads/2024/03/intar.png",
  },
];

const Footer = () => {
  return (
    <footer
      className="text-white py-10 px-5"
      style={{
        backgroundImage:
          "linear-gradient(to right, #3c1026 0%, #c72d70 45.5307%, #b94880 100%)",
      }}
    >
      {/* Tiêu đề */}
      <h2 className="text-center text-xl font-bold uppercase mb-6">
        Địa chỉ hệ thống thẩm mỹ viện Mailisa trên toàn quốc
      </h2>

      {/* Danh sách chi nhánh */}
      <div className="grid md:grid-cols-2 gap-6">
        {branches.map((b, i) => (
          <div key={i}>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold uppercase">{b.city}</span>
              <a
                href={b.map}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Xem chỉ đường
              </a>
            </div>
            <p className="text-sm mt-2 leading-relaxed">
              {b.address}
              <br />
              {b.license}
            </p>
          </div>
        ))}
      </div>

      {/* Liên hệ + logo + thời gian */}
      <div className="mt-10 flex flex-wrap justify-between items-start gap-6 border-t border-gray-700 pt-6">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg">Liên hệ</h3>
          <a href="tel:0932699299" className="hover:text-primary">
            0932 699 299
          </a>
          <a href="tel:0931699299" className="hover:text-primary">
            0931 699 299
          </a>
        </div>

        <div className="flex justify-center w-full md:w-auto">
          <a href="https://mailisa.com/">
            <img
              src="https://mailisa.com/wp-content/uploads/2024/03/logo-footer-02.png"
              alt="Mailisa logo"
              className="w-44"
            />
          </a>
        </div>

        <div className="flex flex-col gap-1 text-right">
          <h3 className="font-bold text-lg">Thời gian làm việc</h3>
          <p>7:30 - 18:00 (Từ thứ 2 - CN)</p>
        </div>
      </div>

      {/* Menu footer */}
      <ul className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
        <li>
          <a href="#" className="hover:text-primary">
            Chính sách quy định chung
          </a>
        </li>
        <li>
          <a
            href="https://mailisa.com/chinh-sach-bao-mat-thong-tin/"
            className="hover:text-primary"
          >
            Chính sách bảo mật và thông tin
          </a>
        </li>
        <li>
          <a
            href="https://medinet.hochiminhcity.gov.vn/default.aspx"
            className="hover:text-primary"
          >
            Sở Y tế TP. Hồ Chí Minh
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary">
            Tiếp nhận ý kiến khách hàng
          </a>
        </li>
        <li>
          <a
            href="https://mailisa.com/tham-my-vien-mailisa-tuyen-dung-tren-toan-quoc/"
            className="hover:text-primary"
          >
            Tuyển dụng
          </a>
        </li>
      </ul>

      {/* Mạng xã hội */}
      <div className="text-center mt-10">
        <h3 className="text-lg font-bold uppercase mb-4">Theo dõi Mailisa</h3>
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
              <img src={s.icon} alt={s.name} className="w-10 h-10" />
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
          <img
            src="https://mailisa.com/wp-content/uploads/2024/03/cong-thuong.png"
            alt="Bộ công thương"
            className="w-40"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

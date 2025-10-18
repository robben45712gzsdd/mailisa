import { NamSaoIcon } from "@/assets/icons";
import { images } from "@/assets/imgs";
import Docter from "@/components/Docter";
import HeadingTitle from "@/components/HeadingTitle";
import OutstandingService from "@/components/OutstandingService";
import Slider from "react-slick";

function CosmeticSurgery() {
  // data service
  const dataService = [
    {
      title: "NÂNG CUNG CHÂN MÀY TRỰC TIẾP PERFECT FORM",
      desc: "Giúp loại bỏ chính xác lượng da dư, da chùng một cách nhanh chóng và an toàn. Với kỹ thuật nâng cung chân mày Perfect Form hiện đại mang lại đường chân mày cao, thanh thoát, đồng thời loại bỏ được dáng chân mày xấu, màu mực lem nhem.",
      img: images.Artboard_5_5,
      link: "",
    },
    {
      title: "TẠO HÌNH MẮT 2 MÍ PERFECT LINE",
      desc: "Giúp bạn sở hữu đôi mắt 2 mí tự nhiên, sắc nét với đường mí cân đối và rõ ràng. Kỹ thuật Perfect Line khắc phục các tình trạng mắt lươn, không có mí, mí lót, mí bụp,... thành đôi mắt to tròn đẹp tự nhiên.",
      img: images.Artboard_16,
      link: "",
    },
    {
      title: "PHẪU THUẬT KHÂU TẠO HÌNH MẮT 2 MÍ",
      desc: "Với kỹ thuật đường mí được tạo hình tinh tế, giúp tạo nếp mí tự nhiên và giữ được lâu dài. Quy trình nhẹ nhàng, ít xâm lấn, đảm bảo an toàn và thời gian hồi phục nhanh chóng. Sau khi thực hiện, bạn sở hữu đôi mắt to tròn, cuốn hút, không còn lo lắng về mí mắt không đều hay sụp mí.",
      img: images.Artboard_17,
      link: "",
    },
    {
      title: "PHẪU THUẬT CẮT DA DƯ LẤY BỌNG MỠ MI DƯỚI",
      desc: "Loại bỏ chính xác lượng da dư, da chùng mỡ thừa chính xác để tạo cho chị em giúp trẻ hóa bọng mắt cho khách hàng trông cực tự nhiên.",
      img: images.Artboard_18,
      link: "",
    },
    {
      title: "PHẪU THUẬT NÂNG MŨI SILKFORM 3D",
      desc: "Bác sĩ sẽ tạo dáng mũi vi chạm ở trên sóng mũi nhân tạo, căn chỉnh phù hợp từ chiều cao chiều dài chiều ngang phù hợp với dáng mũi khuôn mặt hiện tại của em.",
      img: images.Artboard_19,
      link: "",
    },
    {
      title: "PHẪU THUẬT THU GỌN CÁNH MŨI",
      desc: "Đây là tiểu phẫu nhỏ được gây tê cục bộ nên hoàn toàn không đau, quá trình làm đẹp diễn ra nhẹ nhàng, thoải mái. Đường may giấu chỉ siêu nuột nà tuyệt đối không để lại sẹo.",
      img: images.Artboard_20,
      link: "",
    },
  ];

  // List on scroll
  const listIntroViews = [
    {
      image: images.FIXWEB_81,
      title: "Phòng phẫu thuật",
    },
    {
      image: images.FIXWEB_82,
      title: "Quầy tư vấn",
    },
    {
      image: images.tieuchuansao1,
      title: "Phòng phun màu",
    },
    {
      image: images.tieuchuansao4,
      title: "Nội thất",
    },
  ];

  // setting list intro view slider
  const settingsIntroView = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <img src={images?.bannerPhauThuat} alt="" />
      {/* Cavs dịch vụ nổi bật tại MAILISA */}
      <OutstandingService data={dataService} />

      <div className="relative">
        <img src={images?.tuvan1} alt="" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="container">
            <div className="flex items-center justify-center gap-6">
              <div
                class="col-6 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="700"
              >
                <div class="img_wrap">
                  <img src={images?.tuvan2} alt="" />
                </div>
              </div>
              <div
                className="col-6 aos-init aos-animate text-white"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="700"
              >
                <div className="">
                  <span className="text-2xl font-bold flex  items-center">
                    <svg
                      width="50"
                      height="38"
                      viewBox="0 0 65 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_500)">
                        <path
                          d="M39.6014 32.131C39.3882 31.8936 39.1749 31.6778 38.9403 31.6778C36.8078 29.5199 34.6753 27.2326 32.6493 24.7726C30.6687 22.3532 28.926 19.7442 27.4459 16.9826C26.5049 15.2257 25.7883 13.3549 25.3134 11.4152C24.8467 9.35308 24.9202 7.20339 25.5266 5.17886C26.0932 3.40438 27.2451 1.88075 28.7894 0.863072C29.6921 0.283781 30.7311 -0.0415801 31.7994 -0.0795088C32.8676 -0.117437 33.9266 0.13344 34.8672 0.647286C35.946 1.29971 36.8418 2.22092 37.4689 3.32307C38.3285 4.7348 38.8472 6.33164 38.983 7.98413C39.4308 10.6599 39.6441 13.3357 39.8573 16.0115C40.0706 19.3562 40.0706 22.4852 40.0706 25.8083C40.0706 27.362 39.8573 29.1531 39.8573 30.7068C39.7043 31.1664 39.6181 31.6462 39.6014 32.131Z"
                          fill="#FFF"
                        ></path>
                        <path
                          d="M64.7867 30.1243C64.7867 30.1243 64.7867 29.887 65 29.887C64.7867 29.887 64.7867 29.887 64.7867 30.1243Z"
                          fill="#FFF"
                        ></path>
                        <path
                          d="M10.94 45.7043C12.8228 45.481 14.6753 45.0468 16.4633 44.4095H16.6552C16.6915 44.3644 16.7369 44.3275 16.7884 44.3015C16.8399 44.2754 16.8963 44.2608 16.9538 44.2585L20.046 43.1364C25.6737 40.9148 31.1151 38.2375 36.3173 35.1306C36.3173 34.8932 36.1041 34.8932 36.1041 34.6774C35.2297 33.5769 34.59 32.6706 33.7156 31.5701C31.6297 29.0747 29.3084 26.791 26.7848 24.7511C24.8913 23.3466 22.8536 22.1529 20.7071 21.1906C18.7735 20.2982 16.6691 19.8487 14.544 19.8743C12.6258 19.7439 10.7029 20.0461 8.9141 20.759C7.05486 21.4549 5.35122 22.5186 3.90261 23.888C1.59125 26.1775 0.200803 29.2529 5.42328e-05 32.5195C-0.179942 34.1662 -0.0275863 35.8327 0.447887 37.418C1.01085 39.8327 2.29978 42.0115 4.13719 43.6543C5.01599 44.5373 6.09705 45.1866 7.28402 45.5443C8.47098 45.902 9.72697 45.957 10.94 45.7043Z"
                          fill="#FFF"
                        ></path>
                        <path
                          d="M25.0574 55.4364C26.145 54.5517 27.4459 53.4295 28.5121 52.5448C31.6206 49.6886 34.8888 47.0156 38.3005 44.539C39.3668 43.8701 40.4331 43.2011 41.3287 42.5322L41.7979 42.2085C43.3832 40.9028 45.2211 39.9472 47.1932 39.4032C47.6531 39.3588 48.0975 39.2114 48.4941 38.9716C48.8093 38.7236 49.0258 38.3692 49.1041 37.973C49.1824 37.5768 49.1173 37.1654 48.9206 36.8138C48.6782 36.3427 48.2985 35.9585 47.833 35.7132C46.3983 34.8662 44.7161 34.5533 43.0774 34.8285C41.3416 35.0586 39.6951 35.7429 38.3005 36.8138C37.2315 37.727 36.2134 38.6995 35.251 39.7269L33.7369 41.2806L33.0758 42.1653C29.4049 46.5594 26.2026 51.3332 23.522 56.4074V56.6448C23.7566 56.6448 23.7566 56.4074 23.9698 56.4074C24.264 56.0129 24.6339 55.6826 25.0574 55.4364Z"
                          fill="#FFF"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_500">
                          <rect width="65" height="56.5584" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    BÁC SĨ TƯ VẤN THĂM KHÁM
                  </span>
                </div>
                <div className="">
                  Bác sĩ thăm khám để xác định điểm khiếm khuyết và đưa ra
                  phương pháp, công nghệ phù hợp với từng khách hàng.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Docter />

      <div className="container mt-20">
        <HeadingTitle title="TRANG THIẾT BỊ, DỤNG CỤ TRONG PHÒNG PHẪU THUẬT" />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center py-10 justify-center text-center"
        >
          <NamSaoIcon fill={"#e1006e"} className="w-25 h-25" />
          <h2 class="text-primary-dark font-starcity text-6xl">
            Đạt tiêu chuẩn
          </h2>
          <img src={images?.NamSao} alt="" />
          <NamSaoIcon
            className={"[transform:rotateY(180deg)] w-25 h-25"}
            fill={"#e1006e"}
          />
        </div>
      </div>

      <HeadingTitle title="ĐƯỢC BỘ Y TẾ CẤP PHÉP" />
      <Slider {...settingsIntroView}>
        {listIntroViews.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center"
          >
            <div className="p-6 w-full max-h-90">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>

      <div
        className="bg-cover bg-center bg-no-repeat w-full h-[600px] mt-10"
        style={{ backgroundImage: `url(${images?.doingunhanvien})` }}
      >
        <div className="container py-10">
          <h2 class="text-white text-center text-2xl font-bold">
            ĐỘI NGŨ NHÂN VIÊN - CHẾ ĐỘ CHĂM SÓC HẬU MÃI TỐT <br />
            CHO TỪNG KHÁCH HÀNG SAU KHI LÀM DỊCH VỤ
          </h2>
          <div className="flex gap-4">
            <div className="w-1/2 p-4 rounded-lg">
              <div class="item">
                <div class="iframe_wrap">
                  <iframe
                    loading="lazy"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/SP1QQrKS5ew?si=oZwMyd-OBpfM_vIC"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                    data-rocket-lazyload="fitvidscompatible"
                    class="lazyloaded"
                    data-ll-status="loaded"
                  ></iframe>
                  <noscript>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/SP1QQrKS5ew?si=oZwMyd-OBpfM_vIC"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </noscript>
                </div>
                <h3 class="text-center text-white mt-5">
                  Tại Sao Thẩm Mỹ Viện Mailisa Tòa Nhà To Bự Nhân Viên Đông Mà
                  Giá Lại Tốt Như Vậy
                </h3>
              </div>
            </div>
            <div className="w-1/2 p-4 rounded-lg">
              <div class="item">
                <div class="iframe_wrap">
                  <iframe
                    loading="lazy"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/lH1y3UZ1geU?si=nvnIQDmVbnxOFaDn"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen=""
                    data-rocket-lazyload="fitvidscompatible"
                    class="lazyloaded"
                    data-ll-status="loaded"
                  ></iframe>
                  <noscript>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/lH1y3UZ1geU?si=nvnIQDmVbnxOFaDn"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </noscript>
                </div>
                <h3 class="text-center text-white mt-5">
                  Thẩm Mỹ Viện Mailisa Tại Sao Khách Lại Đông Khủng Khiếp Như
                  Vậy
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hoa hậu */}
      <div className="flex flex-wrap md:flex-nowrap items-stretch w-full max-w-7xl mx-auto mt-10 px-6 gap-6">
        {/* Cột trái (7 phần) */}
        <div className="md:w-7/12 w-full flex flex-col items-center justify-center text-center">
          <HeadingTitle title={"Đăng ký nhận tư vấn ngay"} />
          <img
            src={images?.hoaHau3}
            alt="phun mày chạm hạt sương bay"
            className="w-full h-auto object-contain rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Cột phải (5 phần) */}
        <div
          className="md:w-5/12 w-full h-auto bg-cover bg-center rounded-[1.5rem] p-8 flex flex-col justify-center text-center"
          style={{ backgroundImage: `url(${images?.doingunhanvien})` }}
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 leading-tight">
            ĐĂNG KÝ <br /> NHẬN TƯ VẤN
          </h2>

          <form className="flex flex-col items-center space-y-4 w-full">
            {/* Ô nhập Họ & Tên */}
            <input
              type="text"
              placeholder="Họ & Tên"
              className="w-full bg-white text-gray-800 placeholder-gray-400 p-4 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none text-base"
              required
            />

            {/* Ô nhập Số điện thoại */}
            <input
              type="tel"
              placeholder="Số điện thoại của bạn"
              className="w-full bg-white text-gray-800 placeholder-gray-400 p-4 rounded-xl focus:ring-2 focus:ring-pink-400 outline-none text-base"
              required
            />

            {/* Khung recaptcha giả định */}
            <div className="w-full bg-white rounded-xl py-4 px-6 flex items-center justify-between text-gray-600 text-sm shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border border-gray-400 rounded-sm"></div>
                <span>I’m not a robot</span>
              </div>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
                className="h-6"
              />
            </div>

            {/* Nút đặt lịch */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition"
            >
              ĐẶT LỊCH NGAY
            </button>
          </form>
        </div>
      </div>

      {/* <MauMucMyPham />
      <NamSao />
      <SlideHaTang slidesToShow={3} /> */}
    </div>
  );
}

export default CosmeticSurgery;

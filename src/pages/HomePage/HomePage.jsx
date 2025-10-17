import React, { useEffect } from "react";
import Slider from "react-slick";
import { images } from "@/assets/imgs/index.jsx";
import BoxService from "@/components/BoxService/index.jsx";
import ButtonCustom from "@/components/ButtonCustom";
import HeadingTitle from "@/components/HeadingTitle";
function HomePage() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const listImagesBanner = [
    images.bannerDoctor,
    images.bannerWeb,
    images.bannerDoctor2,
  ];

  const listServiceFuture = [
    {
      title: "PHUN MÀU THẨM MỸ",
      description:
        "Phun xăm thẩm mỹ gồm các dịch vụ chính: Phun chân mày, Phun môi, Phun mí, Xóa sửa mày môi mí làm ở chỗ khác bị hư",
      image: images.phummauthammyservice,
      link: "/phun-mau-tham-my/",
    },
    {
      title: "LÀM ĐẸP BẰNG BOTOX",
      description:
        "Làm đẹp bằng botox gồm các dịch vụ : Botox loại bỏ nếp nhăn mắt, Botox loại bỏ nếp nhăn mày, Botox loại bỏ nếp nhăn trán, Botox nâng cơ thái dương, Botox nâng cung mày, Botox loại bỏ nếp nhăn cổ, Botox điều chỉnh cười hở lợi, Botox khóe cười, Botox làm thon gọn nguyên mặt, Botox thon gọn bắp tay, Botox thon gọn bắp chân, Botox loại bỏ tăng tiết mồ hôi nách, Botox làm thon gọn hàm cơ nhai",
      image: images.lamdepbangbotox,
      link: "/lam-dep-bang-botox/",
    },
    {
      title: "PHẪU THUẬT THẨM MỸ",
      description:
        "Phẫu thuật thẩm mỹ gồm các dịch vụ chính: Nâng cung chân mày trực tiếp Perfect Form, nâng mũi siêu tạo hình Nano Form...",
      image: images.phauthuat,
      link: "/phau-thuat-tham-my/",
    },
    {
      title: "ĐIỀU TRỊ DA",
      description:
        "Điều trị da gồm các dịch vụ chính : Điều trị mụn, Điều trị tàn nhang, Điều trị nám, Điều trị bớt sắc tố, Điều trị đồi mồi, chăm sóc căng bóng trẻ hóa da ...",
      image: images.dieutrida,
      link: "/dieu-tri-da/",
    },
    {
      title: "LÀM ĐẸP BẰNG FILLER",
      description:
        "Tạo cằm Vline, Làm đầy thái dương, Làm đầy rãnh cười, Làm đầy má hóp, Làm đầy nếp nhăn tĩnh, Làm đầy tạo hình tai tài lộc, Làm đầy trũng mắt, Tạo đường line viền hàm",
      image: images.lamdepbangfilter,
      link: "/lam-dep-bang-filler/",
    },
    {
      title: "MỸ PHẨM CHÍNH HÃNG",
      description:
        "Mỹ phẩm Doctor Magic được bộ y tế cấp phép lưu hành trên toàn quốc, chiết xuất từ thiên nhiên phù hợp với mọi làn da.",
      image: images.mypham,
      link: "/my-pham-chinh-hang/",
    },
  ];

  const listCertificates = [
    {
      images: images.assets6,
      title: "LÀM ĐẸP THÀNH CÔNG CHO HÀNG TRIỆU KHÁCH HÀNG",
    },
    {
      images: images.kyniem27nawm,
      title: "27 NĂM KINH NGHIỆM TRONG NGÀNH THẨM MỸ",
    },
    {
      images: images.asset7,
      title:
        "ĐỘI NGŨ Y TÁ BÁC SĨ CHUYÊN MÔN CAO, TAY NGHỀ GIỎI, \nĐƯỢC BỘ Y TẾ CẤP PHÉP HOẠT ĐỘNG",
    },
  ];

  // List on scroll
  const listIntroViews = [
    {
      image: images.noithat4,
      title: "Phòng phẫu thuật",
    },
    {
      image: images.quaytuvan,
      title: "Quầy tư vấn",
    },
    {
      image: images.bitmap2,
      title: "Phòng phun màu",
    },
    {
      image: images.noithat4_2,
      title: "Nội thất",
    },
    {
      image: images.noithat3,
      title: "Không gian",
    },
    {
      image: images.noithat3_2,
      title: "Phòng điều trị da",
    },
  ];

  // setting list intro view slider
  const settingsIntroView = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        {listImagesBanner.map((item, index) => (
          <div key={index}>
            <img src={item} alt="banner" />
          </div>
        ))}
      </Slider>
      <div className="flex md:flex-row flex-col justify-center items-center gap-5 my-10 container">
        <img
          src={images.mailisaSeminor}
          alt="mailisaSeminor"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2 className="font-bold text-gradient text-2xl">
            THẨM MỸ VIỆN MAILISA
          </h2>
          <p className="font-semibold text-primary-dark text-center">
            MAILISA – Thương hiệu thẩm mỹ hàng đầu Việt Nam
          </p>
          <p className="mb-2 font-semibold text-primary-dark text-center">
            27 năm – Mang đến cho bạn vẻ đẹp tự nhiên
          </p>
          <img src={images.born1998} alt="mailisaSeminor" />
        </div>
      </div>

      {/* // Service Section   */}
      <div
        className={
          `bg-[url(` + images.bgService + `)] bg-no-repeat bg-cover bg-center`
        }
      >
        <div className="py-12 container">
          <div className="flex flex-col md:flex-b justify-center items-center gap-5 my-10">
            <h1 className="font-bold text-white text-2xl uppercase">
              CÁC DỊCH VỤ NỔI BẬT TẠI MAILISA
            </h1>

            <div className="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              {listServiceFuture.map((service, index) => (
                <div key={index} className="mb-6 w-full">
                  <BoxService {...service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Docter  */}
      <div
        className={`bg-[url(${images.bgDoiNguBacSy})] bg-no-repeat bg-cover bg-center`}
      >
        <div className="py-12 container">
          <h1
            className="font-bold text-gradient text-white text-3xl text-center uppercase"
            data-aos="fade-right"
            data-aos-duration="1000"
            delay="200"
          >
            ĐỘI NGŨ BÁC SĨ, Y TÁ CÓ BẰNG CẤP ĐẦY ĐỦ,
          </h1>
          <h1
            className="font-bold text-gradient text-white text-3xl text-center uppercase"
            data-aos="fade-right"
            data-aos-duration="1000"
            delay="200"
          >
            ĐƯỢC BỘ Y TẾ CẤP PHÉP, TUYỆT ĐỐI KHÔNG LÀM CHUI
          </h1>
          <div className="flex justify-center items-center mt-10">
            <img src={images.bannerbacsy} alt="bannerbacsy" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-12 gap-y-4 py-8 container">
          {listCertificates.map((certificate, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={200 * (index + 1)}
              className="flex flex-col flex-1 justify-start items-center"
            >
              <img
                src={certificate.images}
                alt={certificate.title}
                className="w-[60px] object-cover hover:scale-110 cursor-pointer"
              />
              <p className="mt-4 font-bold text-primary-dark text-white text-sm text-center uppercase tracking-wide">
                {certificate.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex md:flex-row flex-col items-center gap-y-4 mt-10 container">
          <div
            className="flex-3"
            data-aos="fade-right"
            data-aos-duration="1000"
            delay="200"
          >
            <h1 className="font-bold text-gradient text-3xl uppercase tracking-wide">
              MÁY MÓC TRANG THIẾT BỊ TIÊN TIẾN HIỆN ĐẠI
            </h1>
            <p className="mt-3 text-primary-dark text-sm leading-6 tracking-wide">
              Tiên phong trong lĩnh vực thẩm mỹ công nghệ cao, Mailisa liên tục
              đầu tư hệ thống trang thiết bị, máy móc cao cấp được nhập khẩu,
              chuyên giao trực tiếp từ các tập đoàn làm đẹp hàng đầu Hoa Kỳ và
              châu Âu. Tất cả đều đáp ứng tiêu chuẩn khắt khe về chất lượng,
              hiệu quả và độ an toàn của những tổ chức uy tín thế giới như FDA,
              KFDA và CE
            </p>
          </div>
          <div
            className="flex-5"
            data-aos="fade-left"
            data-aos-duration="1000"
            delay="200"
          >
            <img src={images.BitMapMin} alt="BitMapMin" />
          </div>
        </div>
      </div>

      {/* Trang mời  */}
      <div
        className={`bg-[url(${images.trangmoi})] bg-no-repeat bg-cover bg-center introview relative`}
      >
        <style>{`
          .introview::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 4.6875rem;
            top: -10%;
            left: 50%;
            transform: translateX(-50%) rotate(180deg);
            background-image: url(${images.paternNew1});
            background-repeat: no-repeat;
            background-size: cover;
          }
          .introview::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 4.6875rem;
            bottom: -10%;
            left: 50%;
            transform: translateX(-50%);
            background-image: url(${images.paternNew1});
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 10;
          }
        `}</style>
        <div className="flex flex-col justify-center items-center py10 container">
          <h1
            className="pt-10 font-bold text-white text-2xl text-center uppercase"
            data-aos="fade-right"
            data-aos-duration="1000"
            delay="200"
          >
            CƠ SỞ HẠ TẦNG KHANG TRANG SẠCH ĐẸP ĐẢM BẢO 2 TỪ “THẨM MỸ”
          </h1>
          <h1
            className="font-bold text-white text-2xl text-center uppercase"
            data-aos="fade-right"
            data-aos-duration="1000"
            delay="200"
          >
            KHÔNG GIAN NỘI THẤT SANG TRỌNG THOÁNG MÁT ĐẠT TIÊU CHUẨN 5 SAO
          </h1>

          <div
            className="pb-8 w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
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

                  <ButtonCustom
                    className="bottom-4 left-1/2 absolute px-4 py-3 !w-fit text-lg uppercase -translate-x-1/2 transform"
                    text={item.title}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Customer  */}
      <div
        className={`bg-[url(${images.bgCustomer})] bg-no-repeat bg-cover bg-center`}
      >
        <div className="py-12 container">
          <HeadingTitle title={"CẬN CẢNH KHÁCH HÀNG LÀM DỊCH VỤ TẠI MAILISA"} />
          {/* Add customer reviews or testimonials here */}
          <div className="flex gap-5 mt-10 max-h-[400px]">
            <div className="flex-2 aspect-[4/3">
              <iframe
                loading="lazy"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UpnOtVd36D0?si=58bioOW3rKvX9xXg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen=""
                data-rocket-lazyload="fitvidscompatible"
                className="lazyloaded rounded-2xl w-full h-full"
                data-ll-status="loaded"
              ></iframe>
            </div>
            <div className="flex-1 overflow-y-auto gap-2">
              <div className="w-full flex flex-col items-center mb-4 curosor-pointer">
                <img src={images.image9e02} alt="Customer Review 1" />
                <p className="mt-4 text-center font-bold text-primary-dark text-sm leading-6 tracking-wide">
                  Phun Môi Silk Lip Tại Mailisa
                </p>
                <span className="hr w-20 mt-4"></span>
              </div>
              <div className="w-full flex flex-col items-center mb-4 curosor-pointer">
                <img src={images.image9e03} alt="Customer Review 2" />
                <p className="mt-4 text-center font-bold text-primary-dark text-sm leading-6 tracking-wide">
                  Phun Mày Đẹp Tự Nhiên Mailisa
                </p>
                <span className="hr w-20 mt-4"></span>
              </div>
            </div>
          </div>
          <p className={"mt-10 text-primary-dark text-sm leading-6 tracking-wide"}>
            Thành lập từ năm 1998, sau hơn 27 năm đứng vững trên thị trường,
            thẩm mỹ viện Mailisa hiện đã trở thành một trong những thương hiệu
            thẩm mỹ viện chăm sóc sắc đẹp, một địa chỉ đáng tin cậy, hội tụ đủ 6
            tiêu chí: Công nghệ thẩm mỹ hiện đại, quy tụ đội ngũ bác sĩ thẩm mỹ
            giỏi, dịch vụ thẩm mỹ hoàn hảo. Trong suốt thời gian qua, Mailisa
            luôn là điểm đến chăm sóc sắc đẹp đáng tin cậy của khách hàng.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

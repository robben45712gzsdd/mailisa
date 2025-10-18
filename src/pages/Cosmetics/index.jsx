import { images } from "@/assets/imgs";
import BoxService from "@/components/BoxService";
import HeadingTitle from "@/components/HeadingTitle";
import OutstandingService from "@/components/OutstandingService";
import Slider from "react-slick";

function Cosmetics() {
  // data service
  const dataService = [
    {
      title: "TẤT CẢ SẢN PHẨM MAILISA",
      desc: "- Tất cả Mỹ phẩm Doctor Magic đều được kiểm nghiệm cấp phép lưu hành trên toàn quốc. Mailisa Nói Không Với Hàng Trôi Nổi. - Mã Số Giấy Phép Giới Thiệu Sản Phẩm QC Số 281/2020/XNQC-YTHCM - 617/2021/XNQC-YTHCM",
      img: images.docterMagic, // ảnh local tương ứng, ví dụ import từ doingunhanvien
      link: "",
    },
    {
      title: "SẢN PHẨM LÀM ĐẸP DA",
      desc: "- Mỹ phẩm Doctor Magic đều được kiểm nghiệm cấp phép lưu hành trên toàn quốc. Mailisa Nói Không Với Hàng Trôi Nổi. - Mã Số Giấy Phép Giới Thiệu Sản Phẩm QC Số 281/2020/XNQC-YTHCM - 617/2021/XNQC-YTHCM",
      img: images.M49, // đổi sang ảnh local tương ứng (ví dụ Artboard_XX nếu có)
      link: "",
    },
    {
      title: "SẢN PHẨM CHĂM SÓC DA",
      desc: "- Tất cả Mỹ phẩm Doctor Magic đều được kiểm nghiệm cấp phép lưu hành trên toàn quốc. Mailisa Nói Không Với Hàng Trôi Nổi. - Mã Số Giấy Phép Giới Thiệu Sản Phẩm QC Số 281/2020/XNQC-YTHCM - 617/2021/XNQC-YTHCM",
      img: images.M67, // ảnh local tương ứng
      link: "",
    },
  ];

  // List on scroll

  const listIntroViews = [
    {
      title: "Chị Nhật Hoàng",
      desc: "Điều trị da",
      images: [images.img7_4, images.img8_3], // Trước & Sau
    },
    {
      title: "Chị Tô Lê Như",
      desc: "Điều trị da",
      images: [images.img4_3, images.img5_3, images.img6_3], // Trước – Vừa làm – Sau
    },
    {
      title: "Anh Đăng",
      desc: "Điều trị da",
      images: [images.img7_3, images.img8_2], // Trước & Sau
    },
    {
      title: "Chị Lý",
      desc: "Điều trị da",
      images: [images.img4_2, images.img5_2, images.img6_2], // Trước – Vừa làm – Sau
    },
    {
      title: "Chị Võ Như",
      desc: "Điều trị da",
      images: [images.img1_3, images.img2_3, images.img3_3], // Trước – Vừa làm – Sau
    },
  ];

  // setting list intro view slider
  // const settingsIntroView = {
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   autoplay: true,
  //   arrows: false,
  //   autoplaySpeed: 2000,
  // };
  const settingsIntroView = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px", // 👈 quan trọng
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <div>
      <img src={images?.bannerSanPham} alt="" />
      {/* Cac sp nổi bật tại MAILISA */}
      <div className="mx-auto py-10 container">
        <HeadingTitle title="sản phẩm NỔI BẬT TẠI MAILISA" />
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10"
        >
          {dataService &&
            dataService.map((item, index) => (
              <BoxService
                title={item?.title}
                description={item?.desc}
                image={item?.img}
              />
            ))}
        </div>
      </div>

      {/* kết quả sd kh */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full  mt-10"
        style={{
          backgroundImage: `url(${images?.nhomSanPham})`,
          height: "max-content",
        }}
      >
        <div className="mt-10 py-10 container">
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={images?.ketQuaKhachHang} alt="" />
            <h2 className="font-bold text-white text-2xl text-center">
              SỬ DỤNG MỸ PHẨM
            </h2>
          </div>
        </div>
        <Slider {...settingsIntroView}>
          {listIntroViews.map((item, index) => (
            <div key={index} className="p-2">
              <div className="relative flex flex-col justify-between items-center bg-white rounded-xl shadow-md mx-2 p-4 min-h-[420px]">
                {/* nhóm ảnh */}
                <div className="flex w-full h-[220px]">
                  {item.images.map((img, i) => {
                    const labels =
                      item.images.length === 2
                        ? ["Trước khi làm", "Sau khi làm"]
                        : ["Trước khi làm", "Vừa làm xong", "Sau khi làm"];
                    return (
                      <div key={i} className="relative flex-1 overflow-hidden">
                        <img
                          src={img}
                          alt={`${item.title} - ${labels[i]}`}
                          className="w-full h-full object-cover"
                        />
                        <span
                          className="absolute top-1 left-1/2 -translate-x-1/2 
                          bg-white/90 text-primary-dark text-[13px] font-semibold 
                          px-3 py-[2px] rounded-md shadow-sm w-max"
                        >
                          {labels[i]}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* tiêu đề & mô tả */}
                <div className="mt-4 text-center">
                  <h2 className="font-bold text-2xl text-primary-dark uppercase">
                    {item.title}
                  </h2>
                  <p className="text-primary italic text-sm mt-1">
                    {item.desc}
                  </p>
                </div>

                <button className="flex mt-5 items-center justify-center gap-2 px-10 py-3 rounded-full bg-gradient-to-r from-[#4A0024] to-[#D94B8E] text-white font-semibold tracking-wide shadow-md hover:opacity-90 transition w-full">
                  <span className="uppercase">Câu chuyện</span>
                  <span className="italic font-starcity text-white">
                    Khách hàng
                  </span>
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div
          className="container mt-10"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          <div
            className="flex rounded-2xl flex-wrap md:flex-nowrap items-stretch gap-10 py-7 px-12 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${images?.backGround})`,
            }}
          >
            {/* Cột ảnh */}
            <div className="md:w-7/12 w-full flex items-stretch">
              <div className="img_wrap w-full">
                <img
                  src="https://mailisa.com/wp-content/uploads/2024/08/Mailisa-hang-hieu.jpg"
                  alt="Mailisa-hang-hieu"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Cột video */}
            <div className="md:w-5/12 w-full flex items-stretch">
              <div className="iframe_wrap w-full">
                <iframe
                  src="https://www.youtube.com/embed/AviyFR-FMCY?si=SMHBdQpsvq9YFiYs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-2xl shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-10 mt-10">
        {/* Tiêu đề */}
        <HeadingTitle title="BÁO CHÍ NÓI GÌ VỀ MAILISA" />

        {/* Slide logo báo chí */}
        <div className="relative w-[70%] border border-pink-300 rounded-2xl p-4 mx-auto mt-5 flex items-center">
          {/* Nút mũi tên trái */}
          <button className="absolute left-2 z-10 p-2 hover:bg-pink-100 rounded-full transition">
            <svg
              width="28"
              height="28"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-500"
            >
              <path
                d="M31.7754 41.3076L15.8882 25.4205L31.7754 9.53329"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Slider */}
          <div className="w-full overflow-hidden">
            <Slider
              {...{
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                pauseOnHover: true,
                responsive: [
                  { breakpoint: 1024, settings: { slidesToShow: 3 } },
                  { breakpoint: 768, settings: { slidesToShow: 2 } },
                  { breakpoint: 480, settings: { slidesToShow: 1 } },
                ],
              }}
            >
              {[
                images.bipMap9,
                images.bipMap7,
                images.bipMap8,
                images.img789,
                images.img0909,
                images.img1023,
                images.img1122,
                images.img7897,
                images.Unt,
              ].map((img, i) => (
                <div key={i} className="flex justify-center items-center px-6">
                  <img
                    src={img}
                    alt={`logo-${i}`}
                    className="h-[50px] w-auto object-contain mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Nút mũi tên phải */}
          <button className="absolute right-2 z-10 p-2 hover:bg-pink-100 rounded-full transition">
            <svg
              width="28"
              height="28"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-500"
            >
              <path
                d="M19.2246 9.53223L35.1118 25.4194L19.2246 41.3066"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cosmetics;

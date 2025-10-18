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
  const settingsIntroView = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        className="bg-cover bg-no-repeat bg-center mt-10 w-full h-[600px]"
        style={{ backgroundImage: `url(${images?.nhomSanPham})` }}
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
            <div className="p-2" key={index}>
              <div className="flex flex-col justify-between items-center gap-3 bg-white shadow-md mx-2 p-4 rounded-xl min-h-[400px]">
                {/* nhóm ảnh */}
                <div className="flex justify-center p-4 w-full h-[220px]">
                  {item.images.map((img, i) => (
                    <div key={i} className="w-1/3">
                      <img
                        src={img}
                        alt={`${item.title} - ${i}`}
                        className="rounded-lg w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* tiêu đề & mô tả */}
                <div className="mt-4 text-center">
                  <h2 className="font-bold text-primary-dark text-2xl uppercase">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-primary text-sm italic">
                    {item.desc}
                  </p>
                </div>

                <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#4A0024] to-[#D94B8E] hover:opacity-90 shadow-md mt-5 px-10 py-3 rounded-full w-full font-semibold text-white tracking-wide transition">
                  <span className="uppercase">Câu chuyện</span>
                  <span className="font-starcity text-white italic">
                    Khách hàng
                  </span>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Cosmetics;

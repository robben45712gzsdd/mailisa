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
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 "
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
        className="bg-cover bg-center bg-no-repeat w-full h-[600px] mt-10"
        style={{ backgroundImage: `url(${images?.nhomSanPham})` }}
      >
        <div className="container mt-10 py-10">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={images?.ketQuaKhachHang} alt="" />
            <h2 className="text-white text-center text-2xl font-bold">
              SỬ DỤNG MỸ PHẨM
            </h2>
          </div>
        </div>
        <Slider {...settingsIntroView}>
          {listIntroViews.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between items-center bg-white rounded-xl shadow-md mx-2 p-4 min-h-[400px]"
            >
              {/* nhóm ảnh */}
              <div className="flex justify-center gap-4 w-full h-[220px]">
                {item.images.map((img, i) => (
                  <div key={i} className="w-1/3">
                    <img
                      src={img}
                      alt={`${item.title} - ${i}`}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              {/* tiêu đề & mô tả */}
              <div className="mt-4 text-center">
                <h2 className="font-bold text-2xl text-primary-dark uppercase">
                  {item.title}
                </h2>
                <p className="text-primary italic text-sm mt-1">{item.desc}</p>
              </div>

              <button className="flex mt-5 items-center justify-center gap-2 px-10 py-3 rounded-full bg-gradient-to-r from-[#4A0024] to-[#D94B8E] text-white font-semibold tracking-wide shadow-md hover:opacity-90 transition w-full">
                <span className="uppercase">Câu chuyện</span>
                <span className="italic font-starcity text-white">
                  Khách hàng
                </span>
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Cosmetics;

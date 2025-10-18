import { images } from "@/assets/imgs";
import BoxService from "@/components/BoxService";
import HeadingTitle from "@/components/HeadingTitle";
import Slider from "react-slick";
function Training() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const listImagesBanner = [
    images.trangdaotao,
    images.trangdaotao,
    images.trangdaotao,
  ];
  const listServiceFuture = [
    {
      title: "CHĂM SÓC DA",
      description: "Lớp chăm sóc da: 13.000.000đ",
      image: images.itemTrain1,
      link: "#",
    },
    {
      title: "PHUN MÀU THẨM MỸ",
      description: "Lớp phun xăm: 10.000.000đ",
      image: images.itemTrain2,
      link: "#",
    },
  ];

  return (
    <div>
      <img src={images?.daoTao} alt="" />

      <div className="relative overflow-hidden">
        <img src={images?.bgdt_02_1} alt="" className="w-full h-auto" />
        <img
          src={images?.lydo6}
          alt=""
          className="absolute top-1/2 left-[7.8125rem] -translate-y-1/2 z-[3] w-[51.5625rem] max-h-[90%] max-w-full object-contain"
        />
      </div>

      <div
        style={{
          backgroundImage: `url(${images?.itemTrain3})`,
          height: "600px",
        }}
      >
        <div className="container mt-5 py-10">
          <h2 className="text-white text-center text-2xl font-bold">
            CÁC KHÓA ĐÀO TẠO TẠI MAILISA
          </h2>
          <div className="gap-4 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-center">
            {listServiceFuture.map((service, index) => (
              <div key={index} className="mb-6 w-full md:w-auto">
                <BoxService {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="container mt-5 py-10">
          <HeadingTitle
            title={
              <>
                TỔNG GIÁM ĐỐC MAILISA VÀ TGĐ ĐIỀU HÀNH HOÀNG KIM KHÁNH <br />
                TẬN TAY HƯỚNG DẪN HỌC VIÊN
              </>
            }
          />
          <div className="mt-10">
            <Slider {...settings}>
              {listImagesBanner.map((item, index) => (
                <div key={index}>
                  <img src={item} className="rounded-2xl" alt="banner" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;

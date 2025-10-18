import { images } from "@/assets/imgs";
export default function Docter() {
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
  return (
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
            châu Âu. Tất cả đều đáp ứng tiêu chuẩn khắt khe về chất lượng, hiệu
            quả và độ an toàn của những tổ chức uy tín thế giới như FDA, KFDA và
            CE
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
  );
}

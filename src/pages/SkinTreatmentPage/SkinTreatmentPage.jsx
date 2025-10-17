import { images } from "@/assets/imgs";
import OutstandingService from "@/components/OutstandingService";
import Docter from "@/components/Docter";
// data service
const dataService = [
  {
    index: 1,
    title: "ĐIỀU TRỊ NÁM ĐINH",
    desc: "Điều trị da nám đinh bằng công nghệ cao White Skin Spectra kết hợp Pixel CO2 tiên tiến, hiện đại, độc quyền cùng với sản phẩm Doctor Magic.",
    link: "",
    img: images.Artboard_5_4,
  },
  {
    index: 2,
    title: "ĐIỀU TRỊ NÁM MẢNG",
    desc: "Liệu trình điều trị nám mảng sử dụng công nghệ White Skin Spectra giúp làm mờ các mảng nám lan rộng, phục hồi làn da đều màu, sáng khỏe tự nhiên.",
    link: "",
    img: images.Artboard_7_1,
  },
  {
    index: 3,
    title: "ĐIỀU TRỊ TÀN NHANG",
    desc: "Công nghệ Laser YAG tiên tiến giúp loại bỏ các đốm tàn nhang tận gốc, tái tạo bề mặt da mịn màng, trắng sáng và đều màu hơn sau liệu trình.",
    link: "",
    img: images.Artboard_8_2,
  },
  {
    index: 4,
    title: "ĐIỀU TRỊ DA ĐỒI MỒI",
    desc: "Phương pháp điều trị đồi mồi công nghệ cao giúp loại bỏ các đốm sắc tố trên da, trẻ hóa làn da và làm chậm quá trình lão hóa tự nhiên.",
    link: "",
    img: images.Artboard_11_1,
  },
  {
    index: 5,
    title: "ĐIỀU TRỊ SẸO RỖ",
    desc: "Điều trị sẹo rỗ Mailisa ứng dụng công nghệ Fractional Laser và PRP giúp tái tạo da, làm đầy sẹo rỗ hiệu quả và khôi phục cấu trúc da săn chắc.",
    link: "",
    img: images.Artboard_10_1,
  },
  {
    index: 6,
    title: "ĐIỀU TRỊ DA BỚT SẮC TỐ",
    desc: "Công nghệ Laser Q-Switched giúp xử lý hiệu quả tình trạng bớt sắc tố, làm sáng đều màu da và tăng sự tự tin cho khách hàng.",
    link: "",
    img: images.Artboard_7_1,
  },
];

function SkinTreatmentPage() {
  return (
    <div>
      <div>
        <img src={images?.banerBacSiGiaLieu} alt="" />
        {/* Cavs dịch vụ nổi bật tại MAILISA */}
        <OutstandingService data={dataService} />
        <Docter />
        <p className="font-starcity">Xin chào</p>
      </div>
    </div>
  );
}

export default SkinTreatmentPage;

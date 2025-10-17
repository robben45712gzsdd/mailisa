import ButtonCustom from "@/components/ButtonCustom";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
export default function BoxProduction({
  title,
  description,
  image,
  oldPrice,
  newPrice,
  link,
}) {
  return (
    <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 shadow-2xl mx-auto border-secondary rounded-3xl w-full max-w-md overflow-hidden">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      {/* Content Section */}
      <div className="space-y-4 p-6">
        <h3 className="font-bold text-secondary text-2xl text-center uppercase tracking-wide text_gradient">
          {title}
        </h3>

        <p className="font-[500] text-[#222222] text-[12px] leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col justify-between items-center gap-2 pt-2">
          <ButtonCustom link="/services/brow-couture">
              <h4 className="text-uppercase">Giá Gốc</h4>
              <span className="ml-1 text-md line-through"> {oldPrice} Đ</span>
              <TrendingFlatIcon className="ml-1" />
              <span className="font-bold text-[#FFFF79] text-lg">
                {newPrice} Đ
              </span>
          </ButtonCustom>
          <a href={link} className="mt-2 link_btn">
            Xem chi tiết
          </a>
        </div>
      </div>
    </div>
  );
}

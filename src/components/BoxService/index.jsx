import ButtonCustom from "@/components/ButtonCustom";

export default function BoxService({ title, description, image, link }) {
  return (
    <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 shadow-2xl mx-auto rounded-3xl w-full max-w-md overflow-hidden">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      {/* Content Section */}
      <div className="space-y-4 p-6">
        <h3 className="font-bold text-secondary text-2xl text-center uppercase tracking-wide">
          {title}
        </h3>

        <p className="text-[#222222] text-[12px] leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <ButtonCustom
            className="flex-1"
            text="Đăng ký phải"
            link="/services/brow-couture"
          />
          <a
            href={link}
            className="flex flex-1 justify-center items-center bg-white hover:bg-pink-50 shadow-md hover:shadow-lg border-2 border-pink-600 rounded-full font-semibold text-pink-600 transition-all duration-300"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </div>
  );
}

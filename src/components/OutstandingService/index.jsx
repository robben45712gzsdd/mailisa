import HeadingTitle from "@/components/HeadingTitle/index";
import BoxService from "../BoxService";
import { images } from "@/assets/imgs";

function OutstandingService() {
  return (
    <div className="max-w-[1400px] mx-auto py-10">
      <HeadingTitle title="CÁC DỊCH VỤ NỔI BẬT TẠI MAILISA" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <BoxService
          title="Điều trị nám đinh"
          description="Điều trị da nám đinh bằng công nghệ cao White Skin Spectra kết hợp Pixel CO2 tiên tiến, hiện đại, độc quyền cùng với sản phẩm Doctor Magic"
          image={images.itemNamDinh}
        />
        <BoxService
          title="Điều trị nám đinh"
          description="Điều trị da nám đinh bằng công nghệ cao White Skin Spectra kết hợp Pixel CO2 tiên tiến, hiện đại, độc quyền cùng với sản phẩm Doctor Magic"
          image={images.itemNamDinh}
        />
        <BoxService
          title="Điều trị nám đinh"
          description="Điều trị da nám đinh bằng công nghệ cao White Skin Spectra kết hợp Pixel CO2 tiên tiến, hiện đại, độc quyền cùng với sản phẩm Doctor Magic"
          image={images.itemNamDinh}
        />
        <BoxService
          title="Điều trị nám đinh"
          description="Điều trị da nám đinh bằng công nghệ cao White Skin Spectra kết hợp Pixel CO2 tiên tiến, hiện đại, độc quyền cùng với sản phẩm Doctor Magic"
          image={images.itemNamDinh}
        />
        <BoxService
          title="Điều trị nám đinh"
          description="Điều trị da nám đinh bằng công nghệ cao White Skin Spectra kết hợp Pixel CO2 tiên tiến, hiện đại, độc quyền cùng với sản phẩm Doctor Magic"
          image={images.itemNamDinh}
        />
        <BoxService
          title="Điều trị nám đinh"
          description="Điều trị da nám đinh bằng công nghệ cao White Skin Spectra kết hợp Pixel CO2 tiên tiến, hiện đại, độc quyền cùng với sản phẩm Doctor Magic"
          image={images.itemNamDinh}
        />
      </div>
    </div>
  );
}

export default OutstandingService;

import { images } from "@/assets/imgs";
import HeadingTitle from "../HeadingTitle";

function MauMucMyPham() {
  return (
    <div className="container">
      <div className="flex flex-col items-center py-10">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={images?.MauMucMyPham}
          alt=""
        />
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-primary-dark text-2xl mt-2 font-bold"
        >
          RÕ NGUỒN GỐC XUẤT XỨ
        </h2>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={images?.MauMucMyPham2}
          alt=""
        />
      </div>
    </div>
  );
}

export default MauMucMyPham;

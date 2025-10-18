import { NamSaoIcon } from "@/assets/icons";
import { images } from "@/assets/imgs";
import HeadingTitle from "@/components/HeadingTitle";

function NamSao() {
  return (
    <div className="container">
      <HeadingTitle title="CƠ SỞ HẠ TẦNG NỘI THẤT SANG TRỌNG THOÁNG MÁT" />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center py-10 justify-center text-center"
      >
        <NamSaoIcon fill={"#e1006e"} className="w-25 h-25" />
        <h2 class="text-primary-dark font-starcity text-6xl">Đạt tiêu chuẩn</h2>
        <img src={images?.NamSao} alt="" />
        <NamSaoIcon
          className={"[transform:rotateY(180deg)] w-25 h-25"}
          fill={"#e1006e"}
        />
      </div>
    </div>
  );
}

export default NamSao;

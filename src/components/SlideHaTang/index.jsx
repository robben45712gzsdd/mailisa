import { images } from "@/assets/imgs";
import ButtonCustom from "../ButtonCustom";
import Slider from "react-slick";

function SlideHaTang({slidesToShow}) {
  // List on scroll
  const listIntroViews = [
    {
      image: images.noithat4,
      title: "Phòng phẫu thuật",
    },
    {
      image: images.quaytuvan,
      title: "Quầy tư vấn",
    },
    {
      image: images.bitmap2,
      title: "Phòng phun màu",
    },
    {
      image: images.noithat4_2,
      title: "Nội thất",
    },
    {
      image: images.noithat3,
      title: "Không gian",
    },
    {
      image: images.noithat3_2,
      title: "Phòng điều trị da",
    },
  ];

  // setting list intro view slider
  const settingsIntroView = {
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  };
  return (
    <div
      className="pb-8 w-full"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <Slider {...settingsIntroView}>
        {listIntroViews.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center"
          >
            <div className="p-6 w-full max-h-90">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg object-cover"
              />
            </div>

            <ButtonCustom
              className="bottom-4 left-1/2 absolute px-4 py-3 !w-fit text-lg uppercase -translate-x-1/2 transform"
              text={item.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlideHaTang;

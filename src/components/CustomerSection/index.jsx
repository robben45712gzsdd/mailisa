import React from "react";
import HeadingTitle from "../HeadingTitle";

const CustomerSection = ({
  backgroundImage,
  title,
  videoUrl,
  items = [],
  description,
}) => {
  return (
    <div
      className={`bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="py-12 container">
        <HeadingTitle title={title} />

        {/* Nội dung chính */}
        <div className="flex gap-5 mt-10 max-h-[400px]">
          {/* Video */}
          <div className="flex-[2] aspect-[4/3]">
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-2xl w-full h-full"
            ></iframe>
          </div>

          {/* Danh sách hình nhỏ */}
          <div className="flex-1 gap-2 overflow-y-auto">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center mb-4 w-full cursor-pointer"
              >
                <img src={item.image} alt={item.title} className="rounded-lg" />
                <p className="mt-4 font-bold text-primary-dark text-sm text-center leading-6 tracking-wide">
                  {item.title}
                </p>
                <span className="mt-4 w-20 hr"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Mô tả */}
        {description && (
          <p className="mt-10 font-[500] text-md text-primary-dark leading-6 tracking-wide">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomerSection;

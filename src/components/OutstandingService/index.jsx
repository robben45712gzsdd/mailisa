import HeadingTitle from "@/components/HeadingTitle/index";
import BoxService from "../BoxService";

function OutstandingService({ data }) {
  return (
    <div className="mx-auto py-10 container">
      <HeadingTitle title="CÁC DỊCH VỤ NỔI BẬT TẠI MAILISA" />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 "
      >
        {data &&
          data.map((item, index) => (
            <BoxService
              title={item?.title}
              description={item?.desc}
              image={item?.img}
            />
          ))}
      </div>
    </div>
  );
}

export default OutstandingService;

function HeadingTitle({ title }) {
  return (
    <h2
      data-aos="fade-up"
      data-aos-duration="1000"
      className="text-gradient font-bold text-3xl w-max mx-auto text-center uppercase"
    >
      {title}
    </h2>
  );
}

export default HeadingTitle;

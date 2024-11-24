const Banner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages are available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages are available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages are available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages are available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
      next: "#slide1",
      prev: "#slide3",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="carousel w-full">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[90vh] bg-cover bg-no-repeat rounded-xl"
          >
            <div>
              <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

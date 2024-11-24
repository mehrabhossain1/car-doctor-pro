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
      <div className="carousel w-full mt-12">
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
            <div className="h-full w-full flex items-center pl-36">
              <div className="text-white space-y-6">
                <h1 className="text-5xl font-bold">{banner.title}</h1>
                <p className="w-2/3">{banner.description}</p>
                <button className="btn btn-primary mr-4">Discover More</button>
                <button className="btn btn-primary btn-outline !text-white">
                  Latest Project
                </button>
              </div>
            </div>
            <div className="absolute flex justify-between transform bottom-12 right-12 gap-6">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle btn-primary">
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

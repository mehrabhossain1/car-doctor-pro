import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service || {};

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="overflow-hidden h-[30vh]">
        <Image width={640} height={240} src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between items-center">
          <h6 className="text-primary font-semibold">Price : ${price}</h6>
          <Link href={`/services/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

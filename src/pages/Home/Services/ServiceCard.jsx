import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl object-cover h-[240px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{title}</h2>
        <div className="card-actions items-center">
          <p className="text-2xl text-orange-600 font-bold">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-outline text-orange-600 hover:bg-orange-600 hover:border-none">
              Book Now
              <FaArrowRight className="ml-1"></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

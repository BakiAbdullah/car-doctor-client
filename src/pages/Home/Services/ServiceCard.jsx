import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
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
          <button className="btn btn-circle btn-outline  text-orange-600 hover:bg-orange-600 hover:border-none">
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

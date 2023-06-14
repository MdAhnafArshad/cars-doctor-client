import { FaArrowRight } from 'react-icons/fa';

const CardServices = ({ service }) => {
    const { _id, title, img, description, service_id, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body flex flex-row ">
                <div className='w-2/3'>
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl font-bold text-orange-500'>${price}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary"><FaArrowRight /> Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CardServices;
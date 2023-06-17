import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardServices = ({ service }) => {
    const {  _id, title, img, price } = service;
    console.log(_id);
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
                    <Link to={`checkout/${_id}`}>
                    <button className="btn btn-primary rounded-full"><FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardServices;
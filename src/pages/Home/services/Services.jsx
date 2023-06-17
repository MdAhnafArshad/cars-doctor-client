import { useEffect, useState } from "react";
import CardServices from "./CardServices";


const Services = () => {

    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services/')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])


    
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl font-bold text-orange-400">Service</h1>
                <h1 className="text-4xl font-semibold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomized words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                services.map(service => <CardServices
                
                key={service._id}
                service={service}
                ></CardServices>)
            }
            </div>
        </div>
    );
};

export default Services;
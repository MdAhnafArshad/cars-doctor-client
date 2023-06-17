import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
// import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from "react";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'




const CheckOut = () => {

    const service = useLoaderData()
    const { _id, title, service_id, price } = service;
    const { user } = useContext(AuthContext);

    const [selected, setSelected]= useState('');

    const handleServices = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const dueAmount = form.dueAmount.value;
        // const date = form.date.value;
        const  booking = {
            name,
            dueAmount,
            date:selected,
            service_id,
            serviceName: title,
            
        }
        // console.log(booking);
        
        fetch('http://localhost:5000/booking/',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        } 
        )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset();
            }
        })




    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-center ">Book services: <span className="text-orange-400">{title}</span></h1>
            <form onSubmit={handleServices} className=" w-full p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayname} name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-2xl font-bold ">Pick Your Date</span>
                            </label>
                            <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                                // footer={footer}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="dueAmount" defaultValue={'$' + price} placeholder="Due Amount" className="input input-bordered" />
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;
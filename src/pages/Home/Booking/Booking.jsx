import { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import BookingRow from "./BookingRow";

const Booking = () => {

    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);


    const url = `http://localhost:5000/booking/?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [url]);



    // delete operation 
    const handleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            // console.log(result);
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your booking has been deleted.',
                    'success'
                )

                fetch(`http://localhost:5000/booking/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            // alert('Booking deleted successfully');
                            const remaining = booking.filter(booking => booking._id !== id);
                            setBooking(remaining);
                        }
                    });
            }
        })

        // const proceed = confirm('Are you sure you want to delete')

    }



    // update operation or patch operation
    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {

                if(data.modifiedCount > 0){
                    // update state
                    const remaining = booking.filter(booking => booking._id !== id);
                    const updated = booking.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBooking = [updated, ...remaining];
                    setBooking(newBooking);
                    console.log(newBooking);
                }
                console.log(data);
            
            
            });
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-amber-500">Booking:{booking?.length}</h2>
            <p>{user?.email}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Booking Id</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            booking.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Booking;
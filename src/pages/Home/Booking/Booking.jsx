import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import BookingRow from "./BookingRow";

const Booking = () => {

    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const {_id, img}= booking;


    const url = `http://localhost:5000/booking/?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);


    return (
        <div>
            <h2>booking {booking?.length}</h2>
            <p>{user?.email}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            booking?.map(res => <BookingRow
                            key={_id}
                            booking={booking}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;
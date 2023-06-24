import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const {createUser} = useContext(AuthContext);
    const [see, setSee] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        console.log(email, password, confirmPassword);


        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                //navigate user
                navigate(from, {replace: true});
                
            })
            .catch(error => 
                Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`,
            })
            
            
            
            )
    }

    const handlePassword = () => {
        setSee(!see);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left mr-5">
                    <img src={img} alt="img" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl text-center font-bold my-5">Registration now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">password</span>
                            </label>
                            <input type={see ? "text" : "password"}  placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm-Password</span>
                            </label>
                            <input type={see ? "text" : "password"}  name='confirmPassword' placeholder="confirmPassword" className="input input-bordered" />
                            <input onClick={handlePassword} type="checkbox"  className="my-5 toggle"/> <span>see</span>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-outline btn-error" value="submit" />
                        </div>
                        <Link to={'/login'} className="label-text-alt link link-hover">Already have an account</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
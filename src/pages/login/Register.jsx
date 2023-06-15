import { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    
    const {createUser} = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        console.log(email, password, confirmPassword);


        createUser(email, password, confirmPassword)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error))
    }

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
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm-Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="confirmPassword" className="input input-bordered" />
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
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;


    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left mr-5">
                    <img src={img} alt="img" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl text-center font-bold my-5">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to={'/register'} className="label-text-alt link link-hover">Register Now</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="button" className="btn btn-outline btn-error" value="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
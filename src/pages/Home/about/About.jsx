
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <div>
                        <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2  rounded-lg shadow-2xl absolute -bottom-10 -right-1 border-8" />
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <div className='ml-10 space-y-5'>
                        <h1 className="text-xl font-bold text-orange-500">About</h1>
                        <h2 className='text-5xl font-bold'>We are qualified & of experience in this field</h2>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, <br />
                            by injected humour, or randomized words which do not look even slightly believable.</p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                        <button className="btn btn-primary">Get more info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
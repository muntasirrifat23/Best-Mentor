import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './Mentor.css'
const Mentor = () => {
    const [mentor, setMentor] = useState([]);
    const [advisor, setAdvisor] = useState([]);
    useEffect(() => {
        fetch('../../../team.json')
            .then(res => res.json())
            .then(data => setMentor(data));
    }, [])

    useEffect(() => {
        fetch('../../../advisor.json')
            .then(res => res.json())
            .then(data => setAdvisor(data));
    }, [])
    return (
        <div className='bg-white text-black'>
            <Helmet>
                <title>Team Page | Mentor</title>
            </Helmet>

            <div className='text-center text-3xl font-bold underline text-blue-900'>
                Meet Your Mentors
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex justify-center '>

                {mentor && mentor.length > 0 ? (
                    mentor.map(inst => (
                        <>
                            <div className="flex justify-center items-center m-4">
                                <div className="card w-96  shadow-xl">
                                    <figure className='rounded-full' style={{border: "3px solid black"}}><img className='h-50 w-50 object-cover' src={inst.image} alt="mentors" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{inst.mentor}</h2>
                                        <p>{inst.university}, {inst.country}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                ) : (
                    <p>No mentors found.</p>
                )}
            </div>

            {/* ...................Advisor........................ */}
            <div className='ml-12 font-bold text-2xl mt-20 mb-4 underline'>
                Mentors & Advisors:
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center'>
                {advisor && advisor.length > 0 ? (
                    advisor.map(add => (
                        <>
                            <div className="flex justify-center items-center m-4">
                                <div className="card w-96  shadow-xl">
                                    <figure className='rounded-full' style={{border: "3px solid black"}}><img className='h-50 w-50 object-cover' src={add.img} alt="mentors" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{add.name}</h2>
                                        <p>{add.designation}</p>
                                        <button className='bg-red-800 text-white p-2 rounded-xl w-full'>Message Now</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                ) : (
                    <p>No advisor  found.</p>
                )}
            </div>
        </div>
    );
};

export default Mentor;
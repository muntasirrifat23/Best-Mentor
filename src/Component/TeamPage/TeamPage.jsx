import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const TeamPage = () => {
    const[team, setTeam] = useState([])
    useEffect(()=>{
        fetch('../team.json')
        .then(res=> res.json())
        .then(data=>setTeam(data));
    },[])

    return (
        <div className='bg-white text-black'>
            <Helmet>
                <title>Team Page | Team</title>
            </Helmet>
            <div className='text-center text-3xl font-bold underline text-blue-900'>
                See All University
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex justify-center'>
 
                    {team && team.length > 0 ? (
                        team.map(inst => (
                            <>
                                <div className="flex justify-center items-center m-4">
                                    <div className=" w-96 bg-base-100 shadow-xl text-black bg-white border-xl border-black-5px">
                                        <div className="card-body font-semibold text-black bg-white rounded-xl" style={{background:"#092340"}}>
                                            <h2 className="card-title font-bold text-2xl" style={{color:"#C7CCD1"}}>{inst.university}</h2>     
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    ) : (
                        <p>No team teams found.</p>
                    )}
                </div>
        </div>
    );
};

export default TeamPage;
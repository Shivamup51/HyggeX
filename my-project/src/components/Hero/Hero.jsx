import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import HeroImage from '../../assets/HeroImage.png';

const Hero = () => {
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 min-h-[650px]">
                {/* text section */}
                <div className='flex flex-col justify-center gap-3 '>
                    {/* Icons and labels */}
                    <div className='flex space-x-8 mb-4'>
                        <div className='flex items-center space-x-2'>
                            <FaUserGraduate className='text-xl text-blue-300 hover:text-blue-800' />
                            <span className='text-sm text-gray-700'>Student</span>
                        </div>
                        <div className='flex items-center space-x-2 hover:text-yellow-950'>
                            <FaChalkboardTeacher className='text-xl text-yellow-300' />
                            <span className='text-sm text-gray-700'>Teacher</span>
                        </div>
                        <div className='flex items-center space-x-2 hover:text-purple-800'>
                            <FaUsers className='text-xl text-purple-400' />
                            <span className='text-sm text-gray-700'>Parent</span>
                        </div>
                    </div>

                    <h1 className='text-5xl font-bold text-darkblue'>
                        Beyond learning ,<br /> Becoming.
                    </h1>
                    <p className=' font-bold text-lg text-blue-600 mt-6'>
                        Say goodbye to stressful study sessions. With Hyggex's AI-<br />powered learning paths, you can improve your grades and well-<br />being in less time, with less stress.
                    </p>
                    <div className='flex space-x-6 mt-6'>
                        <button className='border bg-blue-500 p-2 px-4 gap-6 rounded-md hover:bg-primary hover:text-black transform duration-100 text-white'>Start Learning </button>

                        <button className='border bg-blue-200 p-2 px-4 gap-2 rounded-md hover:bg-primary hover:text-white transform duration-100 text-blue-400'>Book a Demo </button>
                    </div>

                    <div className="mt-8 text-black transition-0.5s">
                        <span className="text-blue-500">Akash</span> has scored <span className="text-blue-500">9/10</span> in self-awareness <span className="text-blue-500">just now</span>.
                    </div>
                </div>

                {/* image section */}
                <div className='flex items-center justify-center '>
                    <img src={HeroImage} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

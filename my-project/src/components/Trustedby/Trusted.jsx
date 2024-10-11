import React from 'react';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';



const Trusted = () => {
    return (
        <div className="container py-6 w-full flex items-center justify-between bg-transparent">
            <div className="flex items-center justify-center p-1 md:flex-col">
                {/* Heading section */}
                <div className="flex items-center justify-start w-full md:w-full">
                    <h2 className="text-[20px] font-medium leading-[1.4] text-gray-700">
                        <span className="font-bold text-indigo-900">Trusted by<br />the best</span>
                        <span className="font-normal text-gray-600">
                            <br />in the industry
                        </span>
                    </h2>

                    {/* Image section */}
                    <div className="flex ml-20 justify-center items-center overflow-auto ">
                        <div className="flex space-x-5 mx-4">
                            <img 
                                src={img1} 
                                alt="Company 1" 
                                className="h-12 w-20 object-contain"
                            />
                            <img 
                                src={img2} 
                                alt="Company 2" 
                                className="h-12 w-20 object-contain"
                            />
                            <img 
                                src={img3} 
                                alt="Company 3" 
                                className="h-12 w-20 object-contain"
                            />
                            <img 
                                src={img4} 
                                alt="Company 4" 
                                className=" h-12 w-20 object-contain"
                            />
                            <img 
                                src={img5}
                                alt="Company 5" 
                                className=" h-12 w-20 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trusted;

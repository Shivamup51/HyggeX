import React from 'react'
import Logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <header className=''>
            <div className="container py-6 w-full flex items-center justify-between ">
                {/*logo section */}
                <div>
                    <img src={Logo} alt="" className="w-40" />
                </div>
                {/*Navlinks section */}
                <div >
                    <ul className='flex gap-5 items-center'>
                        <li>
                            <a href="#" className='hover:text-primary transform-20 '>Learn</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-primary transform-20 '>Practice</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-primary transform-20 '>Assignments</a>
                        </li>
                    </ul>
                </div>
                {/*buttons  section */}
                <div className='flex space-x-4 ml-4'>
                    <button className='border border-blue-500 p-2 px-4 gap-2 rounded-md hover:bg-primary hover:text-white transform duration-100'>Login</button>
                    <button className='border bg-blue-500 p-2 px-4 gap-2 rounded-md  hover:bg-blue-400 hover:text-white transform duration-100'>SignUp</button>
                </div>
                {/* akash section  */}
                
            </div>
        </header>

    )
}

export default Navbar
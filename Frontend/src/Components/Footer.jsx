import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"; // Import icons

const Footer = () => {
    return (
        <>
            <div className="bg-[#EBEBEB] text-black">
                <div className="flex flex-wrap justify-between w-full text-[1.05rem] p-10 gap-8">
                    <div className="w-full  sm:w-[30%]">
                        <p className="text-xl font-semibold max-[550px]:pt-8">About Us</p>
                        <p className="mt-3 text-wrap text-justify text-black-300">
                            Noteflix is a dynamic, student-focused educational Website , dedicated to help learners and students to get the notes and other study resources esaily. Founded by the students we exist to make the learning journey of every student easier.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full text-center  sm:w-[30%]">
                        <p className="text-xl font-semibold ">Quick Links</p>
                        <div className="text-black-300  ">
                            <ul className="">
                                <li  className="mx-4 mb-2 "><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/'>Home</NavLink></li>
                                <li  className="mx-4 mb-2 "><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/Note'>Note</NavLink></li>
                                <li  className="mx-4 mb-2 "><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/pastpapers'>Past Papers</NavLink></li>
                                <li  className="mx-4 mb-2 "><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/syllabus'>Syllabus</NavLink></li>
                                <li  className="mx-4 mb-2 "><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/aboutus'>About Us</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    {/* Connect with Us Section */}
                    <div className="w-full sm:w-[30%] text-center">
                        <p className="text-lg font-semibold">Connect with Us</p>
                        <div className="flex justify-center gap-6 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black-300 ">
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black-300 ">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-black-300 ">
                                <FaTiktok size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="h-[2px] w-[95%] mx-auto mt-4 bg-black"></div>

                <div className="mx-10 py-10 flex flex-wrap items-center gap-4">
                    <li className="text-black-300 list-none">
                        &copy;2025, <NavLink className="hover:underline hover:underline-offset-4">Noteflix</NavLink>
                    </li>
                    <li>
                        <NavLink className="w-fit text-black-300 hover:underline hover:underline-offset-4">ALl Right Reserved</NavLink>
                    </li>
                    <li>
                        <NavLink className="w-fit text-black hover:underline hover:underline-offset-4">Website Developed By Cloud Nepal</NavLink>
                    </li>

                </div>
            </div>
        </>
    );
};

export default Footer;


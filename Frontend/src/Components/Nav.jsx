import { useState, useEffect } from 'react';
import { useSidebar } from "./SidebarContext"
import { NavLink } from "react-router-dom";
import Search from '../Search/Search';


export default function Nav() {

    const [searchbar, setsearchbar] = useState(false);
    const { toggleSidebar, isSidebarOpen } = useSidebar();
    const [handleplaceholder, sethandleplaceholder] = useState();
    const [deltaY, setdeltaY] = useState(0);




    useEffect(() => {
        const handleScroll = (e) => {
            if (!isSidebarOpen) {
                setdeltaY(e.deltaY);
            }
        };
        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, [isSidebarOpen]);

    useEffect(() => {
        let startY = 0;

        // --- Touch Event Fallback Handlers ---
        const handleTouchStart = (e) => {
            startY = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            if (!isSidebarOpen) {
                const currentY = e.touches[0].clientY;
                setdeltaY(startY - currentY);
            }
        };

        const handleTouchEnd = () => {
            startY = 0
        };


        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);

        // Cleanup on unmount
        return () => {

            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isSidebarOpen]);

    useEffect(() => {
        const handleSearchBar = (e) => {
            if (searchbar) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }

            // Reset everything when clicking outside
            if (searchbar && !e.target.closest('.sidebar')) {
                setsearchbar(false);
                sethandleplaceholder('');
                // Reset input field value
                const searchInput = document.getElementById('search');
                if (searchInput) {
                    searchInput.value = '';
                }
            }
        };

        window.addEventListener("click", handleSearchBar);
        return () => {
            window.removeEventListener("click", handleSearchBar);
            document.body.style.overflow = '';
        };
    }, [searchbar]);


    return (
        <>
            <nav className={`min-[815px]:hidden sidebar top-0 z-30 shadow-md  bg-[#EBEBEB] h-[10vh]  ${deltaY >= 0 ? "relative" : "sticky"} `}>
                <div className={`relative px-3  flex items-center justify-between ${searchbar ? "hidden" : "block"} `}>
                    <svg onClick={toggleSidebar} className={`ml-2 ${isSidebarOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0 0 60 40">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                    <svg onClick={toggleSidebar} className={`ml-2 ${isSidebarOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0 0 24 24">
                        <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                    </svg>
                    <NavLink to="/">
                        <img src="./logo.png" alt="Posterized logo" className=" sm:w-[35vw]  sm:h-[10vh] w-[30vw] h-[10vh] " />
                    </NavLink>
                    <div className="flex items-center  justify-center gap-6 ">
                        <svg onClick={() => { setsearchbar(!searchbar) }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                        </svg>
                    </div>
                    <div className={`absolute flex flex-col  top-[100%] overflow-scroll  left-0 w-[50vw] max-[425px]:w-full  shadow-black h-[100vh]  z-10  gap-10 bg-[#EBEBEB] ${isSidebarOpen ? 'block' : 'hidden'} dropdown`} >
                        <div className=" overflow-scroll flex flex-col text-xl flex-grow  px-6 mt-2">
                            <ul className="">
                                <li onClick={toggleSidebar} className="mx-4 my-10"><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/'>Home</NavLink></li>
                                <li onClick={toggleSidebar} className="mx-4 my-10"><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/Note'>Note</NavLink></li>
                                <li onClick={toggleSidebar} className="mx-4 my-10"><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/pastpapers'>Past Papers</NavLink></li>
                                <li onClick={toggleSidebar} className="mx-4 my-10"><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/syllabus'>Syllabus</NavLink></li>
                                <li onClick={toggleSidebar} className="mx-4 my-10"><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/aboutus'>About Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`relative group flex items-center justify-center ${searchbar ? "block " : "hidden"} `}>
                    <input type="text" id="search"
                        className={`border-[1px] my-3 bg-transparent w-[90%]  placeholder-gray-800 outline-none  border-black px-6 py-3 rounded-3xl
                            `}
                        onChange={(e) => { e.target.value ? sethandleplaceholder(e.target.value) : sethandleplaceholder() }}
                    />
                    <p className={`absolute bottom-6 left-14 text-xl duration-300  group-focus-within:translate-y-[-1rem] group-focus-within:text-xs group-focus-within:opacity-60 group-focus-within:duration-300 ${handleplaceholder ? "translate-y-[-1rem] duration-300 opacity-60 text-xs " : ""}`}>
                        Search
                    </p>
                    <svg className='absolute right-16 bottom-6 ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                    </svg>
                </div>
                <Search
                    query={handleplaceholder}
                />
            </nav >
            <nav className={`hidden top-0 z-30 bg-[#EBEBEB] shadow-md w-full min-[815px]:flex   justify-between items-center  px-10 py-3 gap-10 ${deltaY >= 0 ? "relative" : "sticky"} dropdown`}>
                <NavLink >
                    <img src="./logo.png" alt="Posterized logo" className=" w-[15vw] h-[10vh]  " />
                </NavLink>
                <div className="flex flex-wrap items-center justify-center text-center gap-10">
                    <ul className="flex flex-col md:flex-row gap-7 text-[1.05rem] ">
                        <li className=" px-3 flex items-center  " ><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/'>Home</NavLink></li>
                        <li className="relative px-3 py-4 flex items-center group"><NavLink className={({ isActive }) => ` group-hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/Note'>Note</NavLink><img src="/arrow.png" alt="arrow" className='  group-hover:rotate-180 duration-300 ease-in-out ' />
                            <ul className="absolute left-[-2rem] top-full shadow-xl bg-[#EBEBEB] rounded-md hidden group-hover:block  ">
                                <li className="px-10 py-4"><NavLink to={{
                                    pathname: '/list/CSIT',
                                    search: '?type=Note'
                                }} className={({ isActive }) => ` hover:text-slate-600 ${isActive && location.search === '?type=Note' ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} >BSC.CSIT</NavLink></li>
                                <li className="px-10 py-4"><NavLink to={{
                                    pathname: '/list/BCA',
                                    search: '?type=Note'
                                }} className={({ isActive }) => ` hover:text-slate-600 ${isActive && location.search === '?type=Note' ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} >BCA</NavLink></li>
                                <li className="px-10 py-4"><NavLink to={{
                                    pathname: '/list/BE',
                                    search: '?type=Note'
                                }} className={({ isActive }) => ` hover:text-slate-600 ${isActive && location.search === '?type=Note' ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} >BE</NavLink></li>
                            </ul>
                        </li>
                        <li className=" group relative px-3 flex items-center "><NavLink className={({ isActive }) => ` text-center group-hover:text-slate-600 ${isActive ? "  text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/pastpapers'>Past Papers</NavLink><img src="/arrow.png" alt="arrow" className=' group-hover:rotate-180 duration-300 ease-in-out ' />
                            <ul className="absolute min-[1286px]:left-[-1rem] shadow-xl left-[-20px] top-full rounded-md group-hover:block  bg-[#EBEBEB] hidden">
                                <li className="px-10 py-4"><NavLink to={{
                                    pathname: '/list/CSIT',
                                    search: '?type=Pastpaper'
                                }} className={({ isActive }) => ` hover:text-slate-600 ${isActive && location.search === '?type=Pastpaper' ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} >BSC.CSIT</NavLink></li>
                                <li className="px-10 py-4"><NavLink to={{
                                    pathname: '/list/BCA',
                                    search: '?type=Pastpaper'
                                }} className={({ isActive }) => ` hover:text-slate-600 ${isActive && location.search === '?type=Pastpaper' ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} >BCA</NavLink></li>
                                <li className="px-10 py-4"><NavLink to={{
                                    pathname: '/list/BE',
                                    search: '?type=Pastpaper'
                                }} className={({ isActive }) => ` hover:text-slate-600 ${isActive && location.search === '?type=Pastpaper' ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} >BE</NavLink></li>
                            </ul>
                        </li>
                        <li className=" group relative px-3 flex items-center "><NavLink className={({ isActive }) => ` text-center group-hover:text-slate-600 ${isActive ? "  text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/syllabus'>Syllabus</NavLink><img src="/arrow.png" alt="arrow" className=' group-hover:rotate-180 duration-300 ease-in-out ' />
                            <ul className="absolute min-[1286px]:left-[-1rem] shadow-xl left-[-20px] top-full rounded-md group-hover:block  bg-[#EBEBEB] hidden">
                                <li className="px-10 py-4"><NavLink to={{
                                    pathname: '/list/CSIT',
                                    search: '?type=Syllabus'
                                }} className={({ isActive }) => ` hover:text-slate-600 ${isActive && location.search === '?type=Syllabus' ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} >BSC.CSIT</NavLink></li>
                                <li className="px-10 py-4"><NavLink to={{
                                    pathname: '/list/B',
                                    search: '?type=Syllabus'
                                }} className={({ isActive }) => ` hover:text-slate-600 ${isActive && location.search === '?type=Syllabus' ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} >BCA</NavLink></li>
                                <li className="px-10 py-4"><NavLink to={{
                                    pathname: '/list/BE',
                                    search: '?type=Syllabus'
                                }} className={({ isActive }) => ` hover:text-slate-600 ${isActive && location.search === '?type=Syllabus' ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} >BE</NavLink></li>
                            </ul>
                        </li>
                        <li className="px-3 mr-8 flex items-center "><NavLink className={({ isActive }) => ` hover:text-slate-600 ${isActive ? " text-[#00A7E1] hover:text-[#00A7E1]" : ""}`} to='/aboutus'>About us</NavLink></li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <input type="text" id="search"
                            className={`border-[1px] bg-transparent  placeholder-gray-800 outline-none w-[15vw] border-black px-4 py-3 rounded-3xl
                            `}
                            onChange={(e) => { e.target.value ? (sethandleplaceholder(e.target.value)) : sethandleplaceholder() }}
                        />
                        <p className={`absolute bottom-3 left-4  group-focus-within:translate-y-[-1rem] group-focus-within:text-xs group-focus-within:opacity-60  ${handleplaceholder ? "translate-y-[-1rem] opacity-60 text-xs " : ""}`}>
                            Search
                        </p>
                    </div>
                </div>
                <Search
                    query={handleplaceholder}
                />
            </nav>
        </>
    );
}

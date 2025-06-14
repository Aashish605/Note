import { NavLink } from "react-router-dom";


const Home = () => {

    return (
        <>
            <div   className="h-full  "> 
                <div className=" w-full  flex flex-col items-center  md:flex-row  bg-[#EBEBEB]      ">
                    <div className="md:w-1/2 flex flex-col mt-[10rem] mx-10 md:my-[10rem]  ">
                        <h1 className="text-5xl">Welcome to <span className="text-[#00A7E1]" >Noteflix</span></h1>
                        <div className="my-2">An online learning platform made for students by the students. </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center ">
                        <img src="/peoples.png" alt="" className="scale-x-[-1] z-[0] " />
                    </div>
                </div>
                <h1 className="text-3xl md:text-4xl my-10 text-center">Find Your Note</h1>
                <div className="w-[70vw] flex flex-wrap  gap-8 my-20  mx-auto justify-center ">
                    <NavLink className="" to={{
                        pathname: '/list/CSIT',
                        search: '?type=Note'
                    }} ><div className="bg-[#EBEBEB] cursor-pointer group  w-[200px] h-[25vh] shadow-md  rounded-md grow flex items-center justify-center text-2xl relative">
                        <span className='group-hover:z-10'>BSC.CSIT</span>
                        <div className="absolute group-hover:z-0  w-[104%] h-[103%] -z-10   rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
                    </div></NavLink>
                    <NavLink to={{
                        pathname: '/list/BCA',
                        search: '?type=Note'
                    }}><div className="bg-[#EBEBEB] cursor-pointer group w-[200px] h-[25vh] shadow-md  rounded-lg grow flex items-center justify-center text-2xl relative">
                        <span className='group-hover:z-10'>BCA</span>
                        <div className="absolute group-hover:z-0  w-[104%] h-[103%] -z-10  rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
                    </div></NavLink>
                    <NavLink to={{
                        pathname: '/list/BE',
                        search: '?type=Note'
                    }}><div className="bg-[#EBEBEB] cursor-pointer group w-[200px] h-[25vh] shadow-md  rounded-lg grow flex items-center justify-center text-2xl relative">
                        <span className='group-hover:z-10'>BE</span>
                        <div className="absolute  group-hover:z-0 w-[104%] h-[103%] -z-10  rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
                    </div></NavLink>
                </div>
                <div className="w-[95vw] border-2 my-4 mx-auto border-slate-800"></div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl md:text-4xl my-10 ">About Us</h1>
                    <p className="w-[70vw] mx-auto  text-center" >Greetings! We are delighted to have you visit Noteflix, a helpful educational resource for students. Our website is dedicated to providing students with the tools and resources they need to succeed in their studies. We strive to make our materials easy to understand and relevant to students, offering a range of resources such as Note, pdf files, presentations, assignments, and notices. Our goal is to support students in overcoming any challenges they may face as they pursue their education . Thank you for choosing us as your go-to source for learning and support.</p>
                    <NavLink to='aboutus'><button className="px-4 py-6 w-fit my-8 bg-[#00A7E1] rounded-md text-white ">Learn More</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default Home
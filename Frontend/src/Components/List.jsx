import { useLocation, useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios"

const List = () => {

    const [fetchData, setFetchData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    const params = useParams();
    const course = params.course

    useEffect(() => {
        const getdata = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await axios.get("https://note-backend-one.vercel.app/list");
                const matchedElement = res.data.find((element) => {
                    if (element.type === type && element.course === course) {
                        setFetchData(element);
                        return true;
                    }
                    return false;
                });

                if (!matchedElement) {
                    setError(true);
                }

                setLoading(false);
            } catch (error) {
                setError(true);
                console.log("Error fetching the data", error);
                setLoading(false);
            }
        };
        getdata();
    }, [type, course]);

    if (loading) {
        return (
            <div className="md:my-0 my-20 h-[50vh] md:h-full flex items-center justify-center">
                <img src="/Loading.png" className="rounded-md mx-auto" alt="Loading..." />
            </div>
        );
    }

    if (error) {
        return (
            <div className="md:my-0 my-20 h-[50vh] md:h-full flex items-center justify-center">
                <img src="/maintain.jpg" className="rounded-md mx-auto" alt="No Data Found" />
            </div>
        );
    }

    return (
        <>
            <div>
                {fetchData ? (
                    <div className="min-h-[100vh]">
                        <h1 className="text-center text-4xl mt-16">{course} {type} </h1>
                        <div className="w-[90vw] mx-auto">
                            {fetchData.list.map((semester) => (
                                <div key={semester.sem} className="m-8 w-full">
                                    <div className="w-[80vw] border-2 my-4 border-slate-800"></div>
                                    <h2 className="text-3xl mt-4">{semester.sem} {type} </h2>
                                    <div className="w-[80vw] flex flex-wrap gap-8 my-4">
                                        {semester.Subject.map((subject) => (
                                            <NavLink
                                                to={`/${subject}?type=${type}&course=${course}`}
                                                key={subject}
                                                className="no-underline text-inherit"
                                            >
                                                <div className="bg-primary cursor-pointer group w-[270px] px-4 h-[15vh] shadow-md rounded-md flex items-center justify-center text-2xl relative">
                                                    <span className="group-hover:z-10">{subject}</span>
                                                    <div className="absolute group-hover:z-0 w-[102%] h-[103%] -z-10 rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></div>
                                                </div>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="md:my-0 my-20 h-[50vh] md:h-full flex items-center justify-center">
                        <img src="/maintain.jpg" className="rounded-md mx-auto" alt="No Data Found" />
                    </div>
                )}
            </div>
        </>
    )
}

export default List
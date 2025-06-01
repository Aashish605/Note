import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Fuse from "fuse.js";
import axios from "axios";

const Search = () => {
    const { data } = useParams();
    const [Data, setData] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://note-backend-tau.vercel.app/search");
                setData(response.data);
                if (data) {
                    performSearch(data, response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, [data]);

    const handleSearch = (e) => {
        const pattern = e.target.value;
        performSearch(pattern, Data);
    };

    const performSearch = (pattern, dataToSearch) => {
        if (pattern) {
            const fuse = new Fuse(dataToSearch, {
                keys: ["data.subjects.name"],
                includeScore: true
            });
            const fuseResults = fuse.search(pattern);
            const filteredResults = fuseResults.map(fuseResult => {
                const item = fuseResult.item;
                const matchedSubjects = item.data.map(sem => {
                    const matchedSem = { ...sem };
                    matchedSem.subjects = sem.subjects.filter(sub =>
                        sub.name.toLowerCase().includes(pattern.toLowerCase()));
                    return matchedSem;
                }).filter(sem => sem.subjects.length > 0);
                return { ...item, data: matchedSubjects };
            }).filter(item => item.data.length > 0);
            setResult(filteredResults);
            console.log(filteredResults)
        } else {
            setResult([]);
        }
    };

    return (
        <>
            <div className='h-full w-[95vw] my flex'>
                <div className='py-10 mx-auto'>
                    <div className="flex border-2 bg-white rounded-md md:w-[30vw] w-[65vw]  mx-auto py-2 ">
                        <input
                            type="text"
                            onChange={handleSearch}
                            className="md:w-[25vw] w-[50vw] mx-2 outline-none "
                            placeholder="Search by Name"
                        />
                        <NavLink>
                            <box-icon name='search-alt-2'></box-icon>
                        </NavLink>
                    </div>
                    <div className='w-[90vw] mx-auto'>
                        <div className='flex flex-wrap mx-5'>
                            {
                                result.length > 0 ? result.map(item => (
                                    <span key={item.id} className='px-5 text-2xl flex flex-wrap md:gap-10'>
                                        {item.data.map(element => (
                                            <span key={element.sem} className='flex flex-wrap md:gap-10' >
                                                {element.subjects.map(subject => (
                                                    <span key={subject.name} className='' >
                                                        <NavLink to={`/${item.type}/${item.title}/${subject.name}`}>
                                                            <span className="bg-[#EBEBEB]  text-black cursor-pointer group w-[210px] h-[25vh] shadow-md my-9 rounded-md flex items-center justify-center text-2xl relative">
                                                                <span className='text-center px-4 group-hover:z-10'>{subject.name} {item.title} </span>
                                                                <span className="absolute group-hover:z-0 w-[102%] h-[103%] -z-10 rounded-lg bg-gradient-to-r from-blue-200 to-cyan-300"></span>
                                                            </span>
                                                        </NavLink>
                                                    </span>
                                                ))}
                                            </span>
                                        ))}
                                    </span>
                                )) :
                                    <div className='w-full mx-auto flex justify-center'>
                                        <img src="/nodata.jpg" alt="No Data found" />
                                    </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Search;

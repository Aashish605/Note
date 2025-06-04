import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Fuse from "fuse.js";
import axios from "axios";

const Search = (props) => {
    const [close, setClose] = useState(false);
    // const [Item, setItem] = useState([]);
    const [database, setDatabase] = useState([]);
    const [result, setResult] = useState([]);

    const data = props.query;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://note-backend-one.vercel.app/pdf");
                if (response.data && Array.isArray(response.data)) {
                    setDatabase(response.data);
                } else {
                    console.error("Invalid response structure:", response.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, [data]);

    useEffect(() => {
        setClose(false);
    }, [data]);

    useEffect(() => {
        const closeSearch = (e) => {
            if (data && !e.target.closest('.search')) {
                setClose(true);
            }
        };
        window.addEventListener("click", closeSearch);
        return () => {
            window.removeEventListener("click", closeSearch);
        };
    });

    useEffect(() => {
        if (database && database.length > 0) {
            performSearch(data, database);
        }
    }, [database, data]);

    const fuseOptions = {
        isCaseSensitive: false,
        keys: ["name", "type", "course"]
    };

    const performSearch = (pattern, dataToSearch) => {
        if (pattern) {
            const fuse = new Fuse(dataToSearch, fuseOptions);
            const fuseResults = fuse.search(pattern);
            setResult(fuseResults);
            console.log(fuseResults);
        } else {
            setResult([]);
        }
    };

    return (
        <>
            <div className={`search w-full min-[815px]:w-[50vw] ${data ? "h-fit pb-10 absolute top-[100%] shadow-md right-0 z-50 bg-[#9a2b2b] w-[50vw]" : "hidden"} ${close ? "hidden" : ""}`}>
                {result.length > 0 ? (
                    <div className='px-4 py-2 text-xl'>

                        {result.map((item, index) => (
                            <NavLink
                                to={`/${item.item.name}?type=${item.item.type}&course=${item.item.course}`}
                                className='list-disc mx-2 flex items-center px-8 gap-6 my-8'
                                key={index}
                                onClick={() => setClose(true)} // <-- Add this line
                            >
                                <p>Subject : {item.item.name}</p>
                                <p>Type : {item.item.type}</p>
                                <p>Course : {item.item.course}</p>
                            </NavLink>

                        ))}

                    </div>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </>
    );
};

export default Search;

import { useLocation,  NavLink ,useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios"

const Pdf = () => {

  const [fetchData, setFetchData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');
  const course = queryParams.get('course')

  const params = useParams();
  const name = params.subj

  useEffect(() => {
    const getdata = async () => {
        setLoading(true);
        setError(null);
        console.log(course, type, name);

        try {
            const res = await axios.get("https://note-backend-one.vercel.app/pdf");
            console.log(res.data);

            const matchedElement = res.data.find((element) => {
                if (element.type === type && element.course === course && element.name === name) {
                    setFetchData(element);
                    console.log("inside", element);
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
}, [type, course, name]);

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
        {
            fetchData ? (
                <div className="h-full min-h-[100vh] w-[90vw] md:w-[80vw] mx-auto bg-[#EBEBEB] my-8 flex flex-col items-center">
                    <h1 className="text-4xl my-8 font-semibold mx-14 text-center">{type} of {course}</h1>
                    <p className="mt-8 text-center mb-16 text-2xl">{fetchData.description}</p>
                    {fetchData.pdf.map((e) => (
                        <div key={e.chapter} className="w-full flex flex-col items-center my-8">
                            <p className="text-center mx-10 my-4 text-xl font-semibold">{e.chapter}</p>
                            <div className="w-full flex justify-center">
                                <iframe
                                    className="w-[90vw] md:w-[60vw] h-[85vh] rounded-md shadow-lg"
                                    src={`https://drive.google.com/file/d/${e.link}/preview`}
                                    title={e.chapter}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="md:my-0 my-20 h-[50vh] md:h-full flex items-center justify-between">
                    <img src="/maintain.jpg" className="rounded-md mx-auto" alt="No Data found" />
                </div>
            )
        }
    </>
  )
}

export default Pdf
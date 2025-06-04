import axios from "axios";
import { useState } from "react";

const Post = () => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        course: "",
        description: "",
        pdf: [],
    });

    const addUnit = () => {
        setFormData(prevState => ({
            ...prevState,
            pdf: [...prevState.pdf, { chapter: `Unit-${prevState.pdf.length + 1}`, link: "" }]
        }));
    };

    const handleChange = (e, index = null) => {
        const { name, value } = e.target;
        if (index !== null) {
            const updatedPDF = [...formData.pdf];
            updatedPDF[index][name] = value;
            setFormData({ ...formData, pdf: updatedPDF });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = await axios.post("https://note-backend-one.vercel.app/pdf",{formData})
        console.log(post);
        console.log(JSON.stringify(formData, null, 2));
        alert("Check Console for JSON Output!");
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 my-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">Note Entry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label className="text-lg font-medium mb-2">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-medium mb-2">Type:</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select Type</option>
                        <option value="Note">Note</option>
                        <option value="Past Paper">Pastpaper</option>
                        <option value="Syllabus">Syllabus</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-medium mb-2">Course:</label>
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Select Course</option>
                        <option value="CSIT">CSIT</option>
                        <option value="BCA">BCA</option>
                        <option value="BE">BE</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-medium mb-2">Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <h3 className="text-xl font-semibold mt-6">PDF Units:</h3>
                {formData.pdf.map((unit, index) => (
                    <div key={index} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="text-lg font-medium mb-2">Chapter:</label>
                            <input
                                type="text"
                                name="chapter"
                                value={unit.chapter}
                                onChange={(e) => handleChange(e, index)}
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-lg font-medium mb-2">Link:</label>
                            <input
                                type="text"
                                name="link"
                                value={unit.link}
                                onChange={(e) => handleChange(e, index)}
                                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addUnit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Add Unit
                </button>

                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Post;
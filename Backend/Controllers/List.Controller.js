import List from '../Models/List.Model.js';

export const getlist = async (req, res) => {
    try {
        console.log("Fetching data from MongoDB...");
        const alldata = await List.find();
        console.log("Data fetched successfully:", alldata);
        res.json(alldata);
    } catch (error) {
        console.error("Error fetching alldata:", error.message);
        res.status(500).json({ error: "Internal server error.", details: error.message });
    }
};
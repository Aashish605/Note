import List from '../Models/List.Model.js'

export const getlist = async (req, res) => {
    try {
        const alldata = await List.find();
        res.json(alldata)
    } catch (error) {
        console.error("Error fetching alldata", error);
        res.status(500).json({ error: "Internal server error." });
    }
}
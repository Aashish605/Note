import Pdf from '../Models/Pdf.Model.js'

export const getPdf = async (req, res) => {
    try {
        const alldata = await Pdf.find();
        res.json(alldata)
    } catch (error) {
        console.error("Error fetching alldata", error);
        res.status(500).json({ error: "Internal server error." });
    }
}
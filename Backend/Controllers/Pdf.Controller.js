import Pdf from '../Models/Pdf.Model.js';

// Get all PDFs
export const getPdf = async (req, res) => {
    try {
        const alldata = await Pdf.find();
        res.status(200).json(alldata);
    } catch (error) {
        console.error("Error fetching PDFs:", error.message);
        res.status(500).json({ error: "Internal server error." });
    }
};

// Post a new PDF
export const postPdf = async (req, res) => {
    try {
        const { name, type, course, description, pdf } = req.body;

        if (!name || !type || !course || !description) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const newPdf = new Pdf({ name, type, course, description, pdf });
        const savedPdf = await newPdf.save();
        res.status(201).json(savedPdf);
    } catch (error) {
        console.error("Error saving PDF:", error.message);
        res.status(500).json({ error: "Internal server error." });
    }
};
import Pdf from '../Models/Pdf.Model.js';

// Get all PDFs
export const getPdf = async (req, res) => {
    try {
        const alldata = await Pdf.find();
        res.json(alldata);
    } catch (error) {
        console.error("Error fetching alldata", error);
        res.status(500).json({ error: "Internal server error." });
    }
};

// Post a new PDF
export const postPdf = async (req, res) => {
    try {
        const { name, type, course, description, pdf } = req.body;

        // Validate required fields
        if (!name || !type || !course || !description) {
            return res.status(400).json({ error: "All fields (name, type, course, description) are required." });
        }

        // Create a new Pdf document
        const newPdf = new Pdf({
            name,
            type,
            course,
            description,
            pdf
        });

        // Save the document to the database
        const savedPdf = await newPdf.save();

        // Respond with the saved document
        res.status(201).json(savedPdf);
    } catch (error) {
        console.error("Error saving PDF data:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};
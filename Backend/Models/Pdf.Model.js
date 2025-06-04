import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pdf: [
        {
            chapter: {
                type: String,
                required: false, // Optional if some PDFs don't have chapters
            },
            link: {
                type: String,
                required: false, // Optional if some PDFs don't have links
            },
        },
    ],
});

const Pdf = mongoose.model("Pdf", pdfSchema);
export default Pdf;
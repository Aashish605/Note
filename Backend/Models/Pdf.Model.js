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
    pdf: {
        type: Array,
        required: true,
    },
});
const Pdf = mongoose.model("pdf", pdfSchema);
export default Pdf;
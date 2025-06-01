import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    list: {
        type: Array,
        required: true,
    },
});
const List = mongoose.model("list", listSchema);
export default List;
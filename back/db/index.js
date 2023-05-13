import mongoose from "mongoose"

const connection = mongoose.connect(`mongodb+srv://mongodbuser:4gLgOKqtHJldvL8H@freecluster.wvgkna4.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
export default connection;
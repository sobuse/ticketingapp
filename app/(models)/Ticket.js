import mongoose,{Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise

const ticketShema = new Schema({
    title: stringify,
    description: stringify,
    category: string,
    priority:Number,
    progress:Number,
    status:string,
    active:Boolean,
},
{
    timestamps:true
}
    
);
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketShema)

export default Ticket;
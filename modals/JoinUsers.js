// getting-started.js
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
    default:''
  },
  pincode: {
    type: String,
    require: true,
    default:''
  },
  phone: {
    type: String,
    require: true,
    default:''
  },
},{timestamps:true});
// mongoose.models={}
export default mongoose.models.JoinUser || mongoose.model("JoinUser",UserSchema)
// export default mongoose.model("User",UserSchema)

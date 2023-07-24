import connectDb from '../../midleware/mongoose'
import JoinUser from "../../modals/JoinUsers"
const handler = async (req, res) => {
  if (req.method == "POST") {
try {
  if(req.body.phone.length!==10 || Number.isInteger(req.body.phone)){
    res.status(500).json({success:false,"error":"Please enter your 10 digit phone number"})
    return
  }
  if(req.body.pincode.length!==6 || Number.isInteger(req.body.pincode)){
    res.status(500).json({success:false,"error":"Please enter your 6 digit Pincode number"})
    return
  }

  let data = req.body;
  let order = new JoinUser({
    email: data.email,
    address: data.address,
    phone: data.phone,
    city: data.city,
    designation: data.designation,
    pincode: data.pincode,
  });
  console.log(order);
  
  await order.save()

  
  res.status(200).json({success:true,error:""} );
  
} catch (error) {
  res.status(500).json({success:false,error:"Server Error"})
}

    //check if the details are valid 
 
  }
};
export default connectDb(handler);

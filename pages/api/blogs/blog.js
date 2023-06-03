// import Blog from "../../modals/Blog"

import connectDb from '../../../midleware/mongoose'
import Blog from '../../../modals/Blog'
const handler = async( req, res)=> {
    try {
          let blogs=await Blog.find()
  res.status(200).json(blogs)
    } catch (error) {
        res.status(400).send({error})
    }

}
  
export default connectDb(handler)
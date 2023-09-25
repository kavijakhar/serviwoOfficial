// import Blog from "../../modals/Blog"

import connectDb from '../../../midleware/mongoose'
import Blog from '../../../modals/Blog'
const handler = async (req, res) => {
    try {
        if (req.method == 'GET') {
            let blog = await Blog.findOne({ slug: req.query.slug })
            if(!blog){
                res.status(400).json({blog:{},error:"slug is not valid"})
            }
            res.status(200).json(blog)
        } else {
            res.status(405).json({ message: "Method not allowed" });
        }
    } catch (error) {
        res.status(400).send({ error })
    }

}

export default connectDb(handler)
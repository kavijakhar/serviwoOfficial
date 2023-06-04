// import Blog from "../../modals/Blog"

import connectDb from '../../../midleware/mongoose'
import Blog from '../../../modals/Blog'
const handler = async( req, res)=> {
    try {
        if(req.method=='GET'){
            let blogs=await Blog.find().select('-content')
    res.status(200).json(blogs)
        } else if (req.method == "POST") {
            const { title, authorName, authorEmail, description, excerpt, category, content,slug,image } = req.body;
        
        
            try {
              // Save the blog data to the MongoDB collection
              const blog = await new Blog({
                title,
                authorName,
                authorEmail,
                description,
                excerpt,
                slug,
                image,
                content:JSON.stringify(content),
                category,
              });
        await blog.save()
              res.status(200).json({ message: "Blog data saved successfully",res: req.body });
            } catch (error) {
              res.status(500).json({ message: "Error saving blog data", error });
            }
          } else {
            res.status(405).json({ message: "Method not allowed" });
          }
    } catch (error) {
        res.status(400).send({error})
    }

}
  
export default connectDb(handler)
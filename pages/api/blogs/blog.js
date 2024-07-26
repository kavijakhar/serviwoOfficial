import connectDb from '../../../midleware/mongoose';
import Blog from '../../../modals/Blog';

const handler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      try {
        const { last_news_id, categories, authorName, date, title, tags } = req.query;

        let query = Blog.find().select('-content');
        if (categories) {
          const categoryArray = categories.split(',').map(c => c.trim().toLowerCase());
          query = query.where('category').in(categoryArray);
        }
        if (authorName) {
          const authorNameRegex = new RegExp(authorName, 'i');
          query = query.where('authorName').regex(authorNameRegex);
        }
        if (date) {
          const specificDate = new Date(date);
          const startOfDay = new Date(specificDate.setHours(0, 0, 0, 0));
          const endOfDay = new Date(specificDate.setHours(23, 59, 59, 999));
        
          query = query.where('createdAt').gte(startOfDay).lte(endOfDay);
        }
        if (title) {
          const titleRegex = new RegExp(title, 'i');
          query = query.where('title').regex(titleRegex);
        }
        if (tags) {
          const tagArray = tags.split(',').map(t => t.trim().toLowerCase());
          query = query.where('tags').elemMatch({ $in: tagArray });
        }
        if (last_news_id) {
          query = query.where('_id').gt(last_news_id);
        }

        query = query.limit(5);

        const blogs = await query.exec();
        res.status(200).json(blogs);

      } catch (error) {
        res.status(400).json({ error });
      }
    } else if (req.method === 'POST') {
      const { title, authorName, authorEmail, description, excerpt, category, content, slug, image, timeReading, tags } = req.body;
      const existingBlog = await Blog.findOne({ slug });
      if (existingBlog) {
        return res.status(400).json({ message: "Slug must be unique" });
      }
      try {
        const blog = new Blog({
          title,
          authorName,
          authorEmail,
          description,
          excerpt,
          slug,
          image,
          content: JSON.stringify(content),
          category,
          timeReading,
          tags,
        });

        await blog.save();
        res.status(200).json({ message: "Blog data saved successfully", res: req.body });
      } catch (error) {
        res.status(500).json({ message: "Error saving blog data", error });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

export default connectDb(handler);

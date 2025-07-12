import { useDispatch, useSelector } from "react-redux";
import { setTitle, setDescription, addBlog } from "../store/slices/blogSlice";
import "./add-new-blog.css";

const AddNewBlog = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.blog.title);
  const description = useSelector((state) => state.blog.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog());
  };

  const handleTitleChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const handleDescriptionChange = (e) => {
    dispatch(setDescription(e.target.value));
  };
  return (
    <div className="add-blog-container">
      <h2>Add New Blog</h2>
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Blog Title</label>
          <input
            name="title"
            type="text"
            placeholder="Enter your blog title..."
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Blog Description</label>
          <input
            name="description"
            type="text"
            placeholder="Enter your blog description..."
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddNewBlog;

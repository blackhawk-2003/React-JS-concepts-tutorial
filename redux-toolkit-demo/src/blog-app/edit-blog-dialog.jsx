import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editBlog } from "../store/slices/blogSlice";
import "./edit-blog-dialog.css";

const EditBlogDialog = ({ blog, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      dispatch(
        editBlog({
          id: blog.id,
          title: title.trim(),
          description: description.trim(),
        })
      );
      onClose();
    }
  };

  const handleCancel = () => {
    setTitle(blog.title);
    setDescription(blog.description);
    onClose();
  };

  if (!isOpen || !blog) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-header">
          <h2>Edit Blog Post</h2>
          <button className="dialog-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="dialog-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="edit-title">Blog Title</label>
            <input
              id="edit-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="edit-description">Blog Description</label>
            <textarea
              id="edit-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter blog description..."
              rows="4"
              required
            />
          </div>

          <div className="dialog-actions">
            <button type="button" className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlogDialog;

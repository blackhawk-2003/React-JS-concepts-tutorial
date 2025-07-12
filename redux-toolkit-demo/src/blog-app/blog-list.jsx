import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteBlog } from "../store/slices/blogSlice";
import EditBlogDialog from "./edit-blog-dialog";
import "./blog-list.css";

const BlogList = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();
  const [editingBlog, setEditingBlog] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEditClick = (blog) => {
    setEditingBlog(blog);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingBlog(null);
  };

  if (blogs.length === 0) {
    return (
      <div className="blog-list-container">
        <div className="empty-blog-list">
          <div className="empty-blog-icon">📝</div>
          <h3>No Blogs Yet</h3>
          <p>Start by adding your first blog post using the form above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-list-container">
      <h2 className="blog-list-header">Blog List</h2>
      <ul className="blog-list">
        {blogs.map((blog, index) => (
          <li key={blog.id || index} className="blog-item">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
            <div className="blog-meta">
              <span className="blog-date">
                {new Date().toLocaleDateString()}
              </span>
              <div className="blog-actions">
                <button
                  className="blog-action-btn edit"
                  onClick={() => handleEditClick(blog)}
                >
                  Edit
                </button>
                <button
                  className="blog-action-btn delete"
                  onClick={() => dispatch(deleteBlog(blog.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <EditBlogDialog
        blog={editingBlog}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default BlogList;

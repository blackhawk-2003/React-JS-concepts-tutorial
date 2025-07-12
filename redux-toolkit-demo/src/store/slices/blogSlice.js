import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    id: 0,
    title: "",
    description: "",
    blogs: [],
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    addBlog: (state) => {
      state.blogs.push({
        id: state.blogs.length + 1,
        title: state.title,
        description: state.description,
      });
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },
    editBlog: (state, action) => {
      const { id, title, description } = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      if (blogIndex !== -1) {
        state.blogs[blogIndex] = { id, title, description };
      }
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const {
  setId,
  setTitle,
  setDescription,
  addBlog,
  deleteBlog,
  editBlog,
  setBlogs,
} = blogSlice.actions;

export default blogSlice.reducer;

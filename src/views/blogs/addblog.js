import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import *as  CONSTANT  from '../../constant'
const addblog = () => {
  let history = useHistory();
  const [blog, setBlog] = useState({
    title: "",
    content: ""
  });

  const { title, content } = blog;
  const onInputChange = e => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`${CONSTANT.baseUrl}/api/admin/blogs`, blog);
    history.push("/blogs");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Title"
              name="Title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="content"
              value={content}
              onChange={e => onInputChange(e)}
            />
          </div>
         <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default addblog;
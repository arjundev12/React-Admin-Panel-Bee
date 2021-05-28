import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import *as  CONSTANT  from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
  const history = useHistory()
  const [user, setUser] = useState([{
    id:"",
    name: "",
    user_type: "",
    minner_Activity: "",
}]);
const { id } = useParams();
useEffect(() => {
    loadUser();

}, []);
const loadUser = async () => {
    let array = []
    const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-blogs`);
    console.warn(res.data.data)
    for (let item of res.data.data.docs) {
        if (item.title) {
            array.push(item)
        }
    }
    setUser(array);
};
const onInputChange = async (e, item) => {
    console.warn("oninput change data ", e.target.value, item)
    let data = {}
    data.status = e.target.value
    data.id = item._id
    // data.login_type = item.login_type
    console.log("request", data)
    await axios.put(`${CONSTANT.baseUrl}/api/admin/blogs`, data).then((data1) =>{
        console.log("response", data1)
        // toast( data1.data.data.message)
        loadUser()
    }).catch((err) =>{
        console.log("error", err)
        toast(err.data.message)
    })
  
};
  return (
    <div>
        <Link className="btn btn-primary" to="/">
            back to Home
       </Link>
       <Link className="btn btn-primary" to="/add/blogs">
            add Blogs
       </Link>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th class="address">status</th>
                    {/* <th>Created by</th> */}
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item, i) => <tr>
                        <td>{i+1}</td>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                        <td>
                                <select class="form-control" name="status" value={item.status?item.status:'active'}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value= {'active'} >Active</option>
                                    <option value={'inactive'}>Inactive</option>
                                    {/* <option value="blocked">Block</option> */}
                                </select></td>
                        {/* <td>{item.created_by+""}</td> */}
                    </tr>)
                }
            </tbody>
        </Table>
        <ToastContainer/>
        {/* <Button variant="primary">Primary</Button> */}
    </div>
)
}

export default Blogs

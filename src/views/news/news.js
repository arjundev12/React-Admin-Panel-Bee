import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const News = () => {
    const history = useHistory()
    const [user, setUser] = useState([{
        id: "",
        name: "",
        user_type: "",
        status: "",
        minner_Activity: "",
    }]);
    
    const [search, setSearch] = useState({});
    const { id } = useParams();
    useEffect(() => {
        loadUser();

    }, [search]);
    const loadUser = async () => {
        let array = []
        const data = {
            page: 1,
            limit: 5
        }
        if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
            data.searchData = search.text
        } 
        console.log("datarequest ", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-news`, data);
        console.warn("1111111111",res.data.data)
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
        await axios.put(`${CONSTANT.baseUrl}/api/admin/news`, data).then(data1 =>{
            console.log("response", data1)
            toast( data1.data.data.message)
            loadUser()
        }).catch(err=>{
            console.log("error", err)
            // toast(err.data.message)
        })
      
    };
    const onInputChange1 = async (e)=>{
        console.log("search text", e.target.name, e.target.value )
        setSearch({ ...search, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <Link className="btn btn-primary" to="/">
                back to Home
       </Link>
            <Link className="btn btn-primary" to="/add/news">
                add News
       </Link>
       <div>
                <form>
                    <input
                        type="text"
                        className="searchBox"
                        placeholder="search here...."
                        name="text"
                        value={search.text}
                        onChange={e => onInputChange1(e)}
                    />
                </form>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th class="address">status</th>
                        {/* <th>status</th> */}
                        {/* <th>Action</th> */}
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
                            {/* <td>{item.status?item.status: "active"}</td> */}
                            {/* <td>{item.created_by + ""}</td> */}
                            <td>
                                {/* <Link className="btn btn-primary mr-2 " to={`/user/${item._id}`}>view </Link> */}
                                {/* <Link className="btn btn-primary mr-2" to={`/user/edit/${item._id}`}> edit </Link> */}
                                </td>
                        </tr>)
                    }
                </tbody>
            </Table>
            <ToastContainer />
            {/* <Button variant="primary">Primary</Button> */}
        </div>
    )
}

export default News

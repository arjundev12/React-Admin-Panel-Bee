import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table,DropdownButton,Dropdown } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT  from '../../constant'
import Pagination from '../pagination/pagination'






const Users = () => {
    const history = useHistory()
    //////////////////////////////////pagination/////////////////////////////////////
    const [showPerPage, setShowPerPage] = useState(4);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);

    const onPaginationChange = (start, end) => {
        console.warn("getee, ", start, end)
        setPage(start)
        setIndex(end)
    };
    const [user, setUser] = useState([{
        id: "",
        name: "",
        username:"",
        user_type: "",
        minner_Activity: "",
    }]);
    const { id } = useParams();
    useEffect(() => {
        loadUser();

    }, [page,total]);
    const loadUser = async () => {
        let array = []
        const data = {
            page: page,
            limit: 4
        }
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-user`,data);
        console.warn(res.data.data)
        if (res.data.code == 200) {
            toast("List get successfully")
            setUser(res.data.data.docs);
            await setTotal(res.data.data.total)
        }
       
    };
    const detailsView = async (item) => {
        console.warn("inside handle click", item)
        // history.push(`/user/${item._id}  `)
    }
    const onInputChange = async (e, item) => {
        console.warn("oninput change data ", e.target.value, item)
        let data = {}
        data.minner_Activity = e.target.value
        data._id = item._id
        data.login_type = item.login_type
        await axios.post(`${CONSTANT.baseUrl}/api/user/update-profile`, data).then(data1 =>{
            console.log("response", data1)
            toast( data1.data.data.message)
            loadUser()
        }).catch(err=>{
            console.log("error", err)
            toast(err.data.message)
        })
      
    };

    return (
        <div>
            <Link className="btn btn-primary" to="/">
                back to Home
       </Link>
      
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Type</th>
                        {/* <th>Minner Status</th> */}
                        <th class="address">Minner Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, i) => <tr>
                            <td>{i + index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.user_type}</td>
                            {/* <td>{item.minner_Activity + ""}</td> */}
                            <td>
                                <select class="form-control" name="minner_Activity" value={item.minner_Activity}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value= {true} >Active</option>
                                    <option value={false}>Inactive</option>
                                    {/* <option value="blocked">Block</option> */}
                                </select></td>
                            <td><Link className="btn btn-primary mr-2 " to={`/user/${item._id}`}>view </Link>
                                <Link className="btn btn-primary mr-2" to={`/user/edit/${item._id}`}> edit </Link>
                                {/* <Link className="btn btn-primary " to="/"> delete</Link> */}
                                </td>
                        </tr>)
                    } 
                </tbody>
            </Table>
            <ToastContainer />
            <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={total}
                page={page}
            />
        </div>
    )
}

export default Users

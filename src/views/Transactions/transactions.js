import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table, DropdownButton, Dropdown } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'

import '../../css/style.css'




const Transactions = () => {
    const history = useHistory()
    //////////////////////////////////pagination/////////////////////////////////////
    const [showPerPage, setShowPerPage] = useState(5);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);

    const onPaginationChange = (start, end) => {
        console.warn("getee, ", start, end)
        setPage(start)
        setIndex(end)
    };
    const [transactions, setTransactions] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        loadData(page);

    }, [page, total]);
    const loadData = async (page) => {
        let array = []
        const data = {
            page: page,
            limit: 5
        }
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-transaction`, data);
        console.warn(res.data.data)
        if (res.data.code == 200) {
            toast("List get successfully")
            setTransactions(res.data.data.docs);
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
        await axios.post(`${CONSTANT.baseUrl}/api/user/update-profile`, data).then(data1 => {
            console.log("response", data1)
            toast(data1.data.data.message)
            loadData()
        }).catch(err => {
            console.log("error", err)
            toast(err.data.message)
        })

    };

    return (
        <div>
            <Link className="btn btn-primary" to="/">
                back to Home
       </Link>
            <DropdownButton className='fltR' id="dropdown-basic-button" title="Short By">
                <Dropdown.Item value= {1}>short by date</Dropdown.Item>
                <Dropdown.Item value= {true}>transaction_type</Dropdown.Item>
                <Dropdown.Item value= {true}>type</Dropdown.Item>
                <Dropdown.Item value= {true}>amount</Dropdown.Item>
            </DropdownButton>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>transaction_type</th>
                        <th>type</th>
                        <th>amount</th>
                        {/* <th>Minner Status</th> */}
                        <th>Status</th>
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((item, i) => <tr>
                            <td>{i + index + 1}</td>
                            <td>{item.transaction_type}</td>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.status}</td>
                            {/* <td>{item.minner_Activity + ""}</td> */}
                            {/* <td>
                                <select class="form-control" name="minner_Activity" value={item.minner_Activity}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value= {true} >Active</option>
                                    <option value={false}>Inactive</option>
                                </select></td> */}
                            {/* <td><Link className="btn btn-primary mr-2 " to={`/user/${item._id}`}>view </Link>
                                <Link className="btn btn-primary mr-2" to={`/user/edit/${item._id}`}> edit </Link>
                                </td> */}
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

export default Transactions

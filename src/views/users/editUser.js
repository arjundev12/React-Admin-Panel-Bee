import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT  from '../../constant'
const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        number: "",
        website: ""
    });

    const { name, username, email, number, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        console.log("request", user)
        let data = {}
        if (user.name) {
            data.name = user.name
        }
        if (user.username) {
            data.username = user.username
        }
        if (user.email) {
            data.email = user.email
        }
        if (user.number) {
            data.number = user.number
        }
        data._id = user._id
        data.login_type = 'manual'
        console.log("daaaaaaa", data)
        let response = await axios.post(`${CONSTANT.baseUrl}/api/user/update-profile`, data);
        if (response.data.code == 200) {
            toast("Update successfully");
            setTimeout(function(){history.push("/users"); }, 3000);
            // history.push("/users");
        }
    };

    const loadUser = async () => {

        // const result = 
        await axios.get(`${CONSTANT.baseUrl}/api/user/user-details?_id=${id}`).then((res) => {
            console.log("response", res.data)
            setUser(res.data.data);
        }).catch(err => {
            console.warn(err)
        })

    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your number Number"
                            name="number"
                            value={number}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div> */}
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default EditUser;
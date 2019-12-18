import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendDetails from "./FriendDetails";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = (props) => {
    const [friend, setFriend] = useState({
        name: '', 
        age:'', 
        email:''
    });
    useEffect(() => {
        const id = props.match.params.id;
        axiosWithAuth()
            .get(`http://localhost:5000/api/friends/${id}`)
            .then(res => {
                setFriend(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const editFriend = e => {
        const id = props.match.params.id;
        axiosWithAuth()
            .put(`http://localhost:5000/api/friends/${id}`, friend)
            .then(res => {
                props.history.push('/friends/');
            })
            .catch(err => console.log(err));
    };
    const deleteFriend = e => {
        const id = props.match.params.id;
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => {
                props.history.push('/friends/');
            })
            .catch(err => console.log(err));
    };
    const handleChangesName = e => {
        setFriend({ ...friend, name: e.target.value });
    };

    const handleChangesAge = e => {
        setFriend({ ...friend, age: e.target.value });
    };

    const handleChangesEmail = e => {
        setFriend({ ...friend, email: e.target.value });
    };

        return (
            <div className="list">
            <h1>Friend</h1>
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={friend.name}
                    placeholder="Name"
                    onChange={handleChangesName}
                />
                <input
                    className="input"
                    type="text"
                    name="age"
                    value={friend.age}
                    placeholder="Age"
                    onChange={handleChangesAge}
                />
                <input
                    className="input"
                    type="text"
                    name="email"
                    value={friend.email}
                    placeholder="Email"
                    onChange={handleChangesEmail}
                />
                <button className="submitButton" onClick={() => {
                    editFriend();
                }}>
                    Edit Friend
                </button>

                <button className="submitButton" onClick={() => {
                    deleteFriend();
                }}>
                    Delete Friend
            </button>
            </div>
        );
    
}

export default Friend;
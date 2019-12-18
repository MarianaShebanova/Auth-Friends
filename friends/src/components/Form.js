import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Form = props => {
    const [friend, setFriend] = useState({ name: "", age: "", email: "" });

    const handleChangesName = e => {
        setFriend({ ...friend, name: e.target.value });
    };

    const handleChangesAge = e => {
        setFriend({ ...friend, age: e.target.value });
    };

    const handleChangesEmail = e => {
        setFriend({ ...friend, email: e.target.value });
    };

    const addFriend = e => {
        axiosWithAuth()
            .post('/friends', friend)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        props.getData();
    }
    return (
        <div>
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
                setFriend({ name: "", age: "", email: "" });
                addFriend(friend);
            }}>
                Add Friend
            </button>
        </div>
    );
}

export default Form;
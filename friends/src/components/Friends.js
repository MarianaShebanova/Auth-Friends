import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from "react-router-dom";
import FriendDetails from './FriendDetails';
import Form from './Form';

class Friends extends React.Component {
    state = {
        getFriends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({ getFriends: res.data});
            })
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div className="list">
                <h1>Friends</h1>
                <Form getData = {this.getData}/>
                {this.state.getFriends.map(friend => (
                    <div>
                    <Link to={`/friends/${friend.id}`}>
                        <FriendDetails key={friend.id} name={friend.name} age={friend.age} email={friend.email} id={friend.id}/>
                    </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default Friends;


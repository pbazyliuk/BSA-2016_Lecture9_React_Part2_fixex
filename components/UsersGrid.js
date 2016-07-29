import React, {Component} from 'react';
import User from './User.js';
import '../styles/UsersGrid.css';

class UsersGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: this.props.userList,
            deleteUser : this.props.deleteUser
        }
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            userList: nextProps.userList
        });
    }
        shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.userList.length !== this.props.userList.length) {
                return true;
            } else {
                return false;
            }
        }


    render() {

        let {userList} = this.state;
        return (
            (userList.length > 0) ? <div className="list">
                { userList.map( (elem, index, array) => {
                    return <User delete={this.state.deleteUser} key={elem.id} userId={elem.id}>{elem.name}</User>
                })}
            </div> : null
        )


    }
}

export default UsersGrid;
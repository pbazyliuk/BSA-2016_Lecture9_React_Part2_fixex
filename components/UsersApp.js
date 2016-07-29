import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from "../actions/actions.js";


import UserEditor from './UserEditor.js';
import UsersGrid from './UsersGrid.js';
import UserSearch from './UserSearch.js';
import '../styles/UsersApp.css';


class UsersApp extends Component {
    constructor() {
        super();
        this.save = this.save.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.makeSearch = this.makeSearch.bind(this);
    }

    save(user) {
        let {usersGrid, userId} = this.props.stateFromReducer;
        let users = [...usersGrid, {name: user, id: userId}];
        userId++;
        this.props.saveUser(
            {
                usersGrid: users,
                userId: userId
            }
        );
    }

    makeSearch(text){
            let filtredUsers = [];
            let allUsers = this.props.stateFromReducer.usersGrid;
            allUsers.forEach(function (el, indx) {
                if(text !== '') {
                    if (el.name.toUpperCase().indexOf(text.toUpperCase()) != -1) {
                        filtredUsers = [...filtredUsers, allUsers[indx]];
                    }
                }
            });
            this.props.searchUser({
                usersGrid: allUsers,
                usersFilt: filtredUsers
            })
    }


    deleteUser(indx) {
        let {usersGrid, userId} = this.props.stateFromReducer;
        let users = this.props.stateFromReducer.usersGrid.slice();
        let userIndex;
        userId--;
        users.forEach(function (el,ind) {
            if(el.id == indx){
                userIndex = ind;
            }
        });
        users.splice(userIndex, 1);
        this.props.deleteUser(
            {
                usersGrid: users,
                userId: userId
            }
        );
    }



    render() {
        let userlist1;
        const {moduleCreatorName, usersGrid,usersFilt} = this.props.stateFromReducer;
        if(usersFilt.length > 0 ){
            userlist1 = usersFilt;
        }else{
            userlist1 = usersGrid;
        }
        return (
            <div className="container">
                
                
                    <h2 className="header">User App</h2>
                    <UserSearch searchUsers={this.makeSearch}/>
                    <UserEditor usersGrid={userlist1} save={this.save}/>
                    <UsersGrid userList={userlist1} deleteUser={this.deleteUser}/>
               
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const UsersAppConnected = connect(mapStateToProps, mapDispatchToProps)(UsersApp);
export default UsersAppConnected
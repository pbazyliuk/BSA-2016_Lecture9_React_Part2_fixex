import React, {Component} from 'react';
import {render} from 'react-dom';
import '../styles/UserEditor.css';

class UserEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            usersGrid: this.props.usersGrid
        };
        this.saveUser = this.saveUser.bind(this);
        this.changeIn = this.changeIn.bind(this);
    }

    saveUser(event) {
        event.preventDefault();
        if(this.state.item == "") {return};
        this.props.save(this.state.item);
        this.setState({item: ''});
        return;
    }

    changeIn(event) {
        this.setState({
            item: event.target.value
            });
    }

    render() {
        const userList = this.state.usersGrid;
        return (
                <form className="addForm">
                    <input 
                        type="text" 
                        className="inputC"  
                        placeholder="Enter your name" 
                        ref='item' 
                        onChange={this.changeIn}
                        value={this.state.item}/>
                    <br/>
                    <input 
                        type="submit" 
                        value='Add User'
                        className="addButton"
                        onClick={this.saveUser} />
                </form>
        )
    }
}
export default UserEditor;
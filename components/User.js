import React, {Component} from 'react';
import '../styles/user.css';

class User extends Component{
    constructor(props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(event){
        var id = event.target.id;
        this.props.delete(id);
        event.target.closest('div').style.display ='none';
    }


    render(){
        return(
            <div  className="note">{this.props.children}
                <span 
                id={this.props.userId} 
                onClick={this.deleteUser} 
                className="delete-note"> x </span>
            </div>
        )
    }
}
export default User;
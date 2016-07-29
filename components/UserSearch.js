import React, {Component} from 'react';
import {render} from 'react-dom';
import '../styles/UserSearch.css';

class UserSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState(
            {
                item: event.target.value
            }
        );
        this.props.searchUsers(event.target.value);
    }

    render() {
        return (
            <div >
                <form className="userSearch">
                    <input placeholder="Name filter" type="text" className="filter-field" ref='itemsearch' onChange={this.onChange}
                           value={this.state.item}/>

                </form>   
            </div>

        )
    }
}
export default UserSearch
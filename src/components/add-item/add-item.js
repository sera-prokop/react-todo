import React, {Component} from "react";
import "./add-item.scss";

export default class AddItem extends Component {
    render() {
        return (
            <form className="add-item">
                <input
                    className="add-item__input"
                    type="text"
                    placeholder="What needs to be done?"
                />
                <button className="btn" type="submit">Add</button>
            </form>
        );
    }
}

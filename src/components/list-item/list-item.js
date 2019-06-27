import React, { Component } from "react";
import "./list-item.scss";

import Item from "../item";

export default class ListItem extends Component {
    render() {
        return(
            <ul className="list-item">
                <li className="list-item__item">
                    <Item />
                </li>
                <li className="list-item__item">
                    <Item />
                </li>
            </ul>
        )
    }
}

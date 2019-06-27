import React, { Component } from "react";
import "./search.scss"

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <input className="search__input" type="text"
                    placeholder="type to search"
                />
                <div className="search__btns">
                    <button className="btn btn--active">All</button>
                    <button className="btn">Active</button>
                    <button className="btn">Done</button>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import "./header.scss"

export default class Header extends Component {
    render() {
        const {headerMore, headerDone} = this.props;
        return (
            <header className="header">
                <h1 className="header__title">Todo List</h1>
                <div className="header__text">{headerMore} more to do, {headerDone} done</div>
            </header>
        );
    };
};

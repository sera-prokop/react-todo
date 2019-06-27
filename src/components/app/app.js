import React, { Component } from "react";
import "./app.scss";

import Header from "../header";
import Search from "../search";
import ListItem from "../list-item"
import AddItem from "../add-item";

export default class App extends Component{

    render() {
        return <div className="app">
            <Header headerMore={3} headerDone={0} />
            <Search />
            <ListItem />
            <AddItem />
        </div>;
    }
}

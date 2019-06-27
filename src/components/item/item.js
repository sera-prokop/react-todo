import React, {Component} from 'react';
import "./item.scss";

export default class Item extends Component {
    render() {
        return (
            <React.Fragment>
                <span className="item__text">
                    Drink Coffee
                </span>
                <div className="item__btns">
                    <button className="btn btn--trash">Удалить</button>
                    <button className="btn btn--attention">Важное</button>
                </div>
            </React.Fragment>
        );
    };
};

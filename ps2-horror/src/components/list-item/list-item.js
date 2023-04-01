import { Component } from "react";
import "./list-item.css";
import del from "./img/del.png";
import game from "./img/game.png";
import star from "./img/star.png";

class ListItem extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            fav: false,
            play: false
        }
    }

    markFav = () => {
        this.setState( 
            ({ fav} ) => ({ fav: !fav }) 
        );
    }

    markPlay = () => {
        this.setState( 
            ({ play }) => ({ play: !play }) 
        );
    }

    render() {
        const {name, rating, src, id} = this.props;
        const {fav, play} = this.state;

        let classNames = "list-item";

        if (fav) { classNames += " fav"; }
        if (play) { classNames += " play"; }

        return (
            <li className={classNames} id={id}>
                <img className="img-cover" src={src} alt="" />
                <div className="list-item-buttons">
                    <button type="button" className="btn-sm btn-fav" onClick={this.markFav}>
                        <img className="icon icon-favourite" src={star} alt="" />
                    </button>
                    <button type="button" className="btn-sm btn-play" onClick={this.markPlay}>
                        <img className="icon icon-played" src={game} alt="" />
                    </button>
                    <button type="button" className="btn-sm">
                        <img className="icon icon-delete" src={del} alt="" />
                    </button>
                </div>
                <div className="list-item-data">
                    <span className="list-item-name">
                        <img className="status-icon fav" src={star} alt="" />
                        <img className="status-icon play" src={game} alt="" />
                        {name}
                    </span>
                    <span className="list-item-rating">{rating}</span>
                </div>
            </li>
        );
    }
}

export default ListItem;
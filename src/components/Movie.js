import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Movie extends Component {
    
    updateRented = () =>{
        if(this.props.budget < 3){
            alert('there are insufficient funds')
        }else{
            this.props.updateRented(this.props.movie.id)
            if(this.props.movie.isRented){
                this.props.decreaseBudget()
            }else{
                this.props.increaseBudget()
            }

        }
    }
    
    render() {
        const { movie } = this.props
        return (
            <div>
                <div className = 'btn' onClick = {this.updateRented}>{movie.isRented ? '-' : '+'}</div>
                <Link to={`/catalog/${movie.id}`}>
                    <img className="movieImg" src={movie.img} alt="" />
                </Link>
            </div>
        );
    }
}

export default Movie;
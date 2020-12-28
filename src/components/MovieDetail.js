import React, { Component } from 'react';

class MovieDetail extends Component {
    render(){
        const movieId = this.props.match.params.movieId
        const movie = this.props.movieData.find(m => { return m.id === movieId })
        return (
            <div className = 'movieDetail'>
                <div>{movie.title} ({movie.year})</div>
                <img className="movieImg" src={movie.img} alt=""/>
                <div>{movie.descrShort}</div>
            </div>
        )
    }
}

export default MovieDetail;
import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {
    constructor() {
        super();
        this.state = { budget: 10, searchInput: '', searchedMovies: []}
    }

    increaseBudget = () => {
        let { budget } = this.state
        budget += 3
        this.setState({ budget })
    }

    decreaseBudget = () => {
        let { budget } = this.state
        budget -= 3
        this.setState({ budget })
    }

    handleInput = (e) => {
        const {value}= e.target
        this.setState({
            searchInput: value
        }, () => {
            this.props.movieData.filter(m => m.title.toLowerCase().includes(this.state.searchInput.toLowerCase())).map(m => this.state.searchedMovies.push(m))
            if(this.state.searchedMovies.length === 0){
                this.setState({searchedMovies: this.props.movieData})
                console.log(this.state.searchedMovies)
            }
        })
    }

    render() {
        const { movieData, updateRented } = this.props
        const rentedArr = movieData.filter(m => m.isRented).map(m => <div>{m.id}</div>)
        return (
            <div>
                <div className='search-header'>
                    <input id="search-input" placeholder='Search' value={this.state.movie} onChange={this.handleInput} />
                    <div id='budget'>Budget: ${this.state.budget}</div>
                </div>
                {rentedArr.length ? <div className='catalogContent'>Rented:
                <div className='movieWrapper'>{movieData.filter(m => m.isRented)
                        .map(m => <Movie key={m.id} movie={m}
                            updateRented={updateRented} budget={this.state.budget}
                            increaseBudget={this.increaseBudget} decreaseBudget={this.decreaseBudget} />)}</div>
                </div> : null}
                <div className='catalogContent'>Catalog:
                <div className='movieWrapper'>{movieData
                        .map(m => <Movie movie={m} key={m.id}
                            updateRented={updateRented} budget={this.state.budget}
                            increaseBudget={this.increaseBudget} decreaseBudget={this.decreaseBudget} />)}</div>
                </div>
            </div>
        );
    }
}

export default Catalog;
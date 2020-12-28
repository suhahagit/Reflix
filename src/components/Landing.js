import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: 'Mona', color: 'blue' },
                { name: 'Jasmyne', color: 'red' },
                { name: 'Aura', color: 'green' },
                { name: 'Tina', color: 'yellow' }
            ]
        }
    }
    render() {
        return (
            <div>
                <div className='landingTitle'>WHO'S WATCHING?</div>
                <Link to='/catalog' className='users'>
                    <div className='wrapper'>
                        {this.state.users.map(u => <div className='user' id={u.color} key={u.color}>{u.name}</div>)}
                    </div>
                </Link>
            </div>
        );
    }
}

export default Landing;
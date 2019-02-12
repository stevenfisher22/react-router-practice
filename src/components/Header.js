import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/add-movie"> Add Movie </Link></li>
                    <li><Link to="/all-movies"> All Movies </Link></li>
                    <li><Link to="/article"> Article </Link></li>
                </ul>
            </div>
        );
    }
}


export default Header

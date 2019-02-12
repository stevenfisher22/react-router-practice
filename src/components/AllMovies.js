import React from 'react';

class AllMovies extends React.Component {
    constructor(props) {
        super(props);
        this.navToHome = this.navToHome.bind(this);
        this.history = props.history;
    }

    navToHome(){
        this.history.push('/');
    }

    render() {
        return (
            <div>
                All Movies <br />
                <button onClick={this.navToHome}>Home</button>
            </div>
        );
    }
}

export default AllMovies

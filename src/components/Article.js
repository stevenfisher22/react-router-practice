import React from 'react';

class Article extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                {this.props.match.params.art}
            </div>
        );
    }
}

export default Article

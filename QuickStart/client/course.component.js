import React from 'react';
import PropTypes from 'prop-types';

export class CourseComponent extends React.Component {
    render() {
        //1.React with prop
        //    return (<h1> {this.props.details.name} {this.props.details.price}  </h1>);

        //2.React with prop as index
        return (<h1> [{this.props.index}]&raquo; {this.props.details.name} <br />${this.props.details.price}  </h1>);
    }
}
CourseComponent.propTypes = {
    index: PropTypes.number
}

//to instatntiate component without props by making props optional
CourseComponent.defaultProps = {
    index: 0,
    details: {
        name: 'Unknown',
        price: 0
    }

}
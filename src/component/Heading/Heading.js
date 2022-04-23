import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './Heading.module.css';


const Heading = ({level = 1, className, children }) => {
    let elem =`h${level}`;

    return React.createElement(elem,{
        className:cn(s.root, className),
    },children)
}

Heading.propTypes ={
    level: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node

}

export default Heading; 

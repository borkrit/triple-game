import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import s from './Text.module.css';

const Text = ({element,className,strong=false,italic=false,disabled=false,children})=> {
    
    return React.createElement(element, {
        className:cn(s.root, className,{
            [s.strong]:strong,
            [s.italic]:italic,
            [s.disabled]:disabled
            
        }),
        
    },children);
}

Text.propTypes ={
    element: PropTypes.string,
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node
}


export default Text;

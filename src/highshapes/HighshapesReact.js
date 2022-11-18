import './style.css';
import React from "react";
import { formatOption } from './utils';

const HighshapesReact = (props) => {
    const options = formatOption(props.options);
    const renderContent = () => {
        const shapeContent = props.Highshapes[options.shape.type] ? props.Highshapes[options.shape.type](options) : null;
        if(shapeContent) {
            return (
                <div className={'container'}>
                    <div>{shapeContent.renderShape}</div>
                    <div>{options.function && options.function.getArea ? <>Area of {options.shape.type}: {shapeContent.getArea()}</> : null}</div>                
                </div>
            );
        } else {
            const msg = `Plugin Not Found For Type: ${options.shape.type}`;
            console.warn(msg);
            return null;
        }
    };

    return <>{renderContent()}</>;
};

export default HighshapesReact;

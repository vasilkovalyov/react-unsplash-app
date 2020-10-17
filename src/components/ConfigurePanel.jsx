import React from 'react';
import Button from './Button';

const ConfigurePanel = (props) => {
    const {count, displayedType} = props;

    return (
        <div className="configure-panel">
            <span>Displayed Photos: {count}</span>
            <ul className="configure-panel__buttons">
                <li>
                <Button 
                    clsName="configure"
                    handleClick={(e) => displayedType('grid-lg')}    
                >
                    <span className="icon-grid-lg"></span>
                </Button>
                </li>
                <li>
                <Button 
                    clsName="configure"
                    handleClick={(e) => displayedType('grid-md')}    
                >
                    <span className="icon-grid-sm"></span>
                </Button>
                </li>
            </ul>
        </div>
    );
};

export default ConfigurePanel;
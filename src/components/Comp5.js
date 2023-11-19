import React, {useState} from 'react';
import "./Comp5.css";

function Comp5() {
    const [isActive, setIsActive] = useState(false);
    const toggleClass = () => {
        setIsActive(previousState => !previousState)
    }
    
    return (
        <div>
            <button onClick={toggleClass} className={isActive ? 'activeButton' : 'inactiveButton'}>
                Click me to Toggle Style
            </button>
            <p className={isActive ? 'activeText' : 'inactiveText'}>
                {isActive ? 'Active Text' : 'Inactive Text'}
            </p>
        </div>

        )
}

export default Comp5
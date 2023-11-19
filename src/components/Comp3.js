import React,{useState} from 'react';

function Comp3() {
    const [isBlue, setIsBlue] = useState(false)
    const toggleColor = () => {
        setIsBlue(isBlue => !isBlue)
    }
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: isBlue ? 'blue' : 'red',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        border: "2px solid black"
    }
    return (

        <div className='comp3-container'>
            <h1>Conditional STyling in React</h1>
            <div style={boxStyle}>
                {isBlue ? "blueBox" : "redBox" }
                This is a div.
            </div>
            <button onClick={toggleColor}>
                {isBlue ? "makeItRed" : "makeItBlue" }
                Click here
            </button>
        </div>
    )
}

export default Comp3;
import React, { useState } from 'react'


function Comp4() {
    const [fontSize, setFontSize] = useState(16);
    const [backgroundColor, setBackgroundColor] = useState("#e5758a")
    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value)
    };

    const textStyle = {
        fontSize: `${fontSize}px`, // Set font size dynamically based on state
        border: '1px solid #ccc',
        padding: '10px',
        margin: '20px',
    };

    const handleColorChange = (newColor) => {
        setBackgroundColor(newColor)
    };

    const divStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: backgroundColor,
        border: '2px solid #333',
        borderRadius: '5px',
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
    }

    return (
        <div>
            <h1>Dynamic Styles in React</h1>
            <div style={textStyle}>
                <p>Change font size: </p>
                <input
                    type='range'
                    min="10"
                    max="40"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                />
                <p style={{ fontSize: "18px" }} >Sample Text</p>
            </div>

            <div style={divStyle}>
                Dynamic Background Color
            </div>
            <div>
                <button onClick={() => handleColorChange("#868ddc")}>Color 1</button>
                <button onClick={() => handleColorChange("#85cb90")}>Color 2</button>
                <button onClick={() => handleColorChange("#f3b884")}>Color 3</button>
            </div>
        </div>
    )
}

export default Comp4
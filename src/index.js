// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'


// function getButtonText() {
//     return 'Click on me!'
// }

// Create a react component
const App = function() {
    // const buttonText = 12345 or ['Hi', 'There'] or [10, 20]
    // const buttonText = 'Click Me!'
    // const style={backgroundColor: 'blue', color: 'white' }
    const buttonText = { text: 'Click Me!' }
    const labelText = 'Enter name:'
    return (  
    <div>
        {/* instead of class */}
        <label className="label" for="name"> 
            {/* Enter name: */}
            {labelText}
        </label>
        <input id="name" type="text" />
        {/* <button style={style}> */}
        {/* <button style="background-color: blue; color: white">Submit</button> */}
        <button style={{backgroundColor: 'blue', color: 'white' }}>
            {/* Submit */}
            {/* {buttonText} */}
            {buttonText.text}   
            {/* {getButtonText()} */}
        </button>
    </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
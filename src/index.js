// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'


// function getButtonText() {
//     return 'Click on me!'
// }

// Create a react component
const App = function() {
    const buttonText = 'Click Me!'
    return (  
    <div>
        {/* instead of class */}
        <label className="label" for="name"> 
            Enter name:
        </label>
        <input id="name" type="text" />
        {/* <button style="background-color: blue; color: white">Submit</button> */}
        <button style={{backgroundColor: 'blue', color: 'white' }}>
            {/* Submit */}
            {buttonText}
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
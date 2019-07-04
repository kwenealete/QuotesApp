import React from 'react'


const QuoteBox = ({quote, author}) => (

    <React.Fragment>
        <div id="text" ><p>{quote}</p></div>
        <div id="author" ><h4>{author}</h4></div>
    </React.Fragment>

)


export default QuoteBox
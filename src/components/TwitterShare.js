import React from 'react';


const TwitterShare = ({ quote, author }) => (
   
       <React.Fragment>
          <a href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`} target="blank" title="Share quote on twitter!" id='tweet-quote'>
             <i className="fa fa-twitter twitter-icon" ></i>
          </a>
       </React.Fragment>
    )

 export default TwitterShare
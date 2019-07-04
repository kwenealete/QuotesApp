import React from 'react';
import axios from 'axios';
import QuoteBox from './QuoteBox';
import TwitterShare from './TwitterShare';
import Button from './Button';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component{
  state= {
    quote: '',
    author: ''
  }


  getQuote = () => {
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

    axios.get(url)
      .then(res =>{
        let data = res.data.quotes;
        let quoteNumber = Math.floor(Math.random() * data.length);
        let randomQuote = data[quoteNumber]

        this.setState({
          quote: randomQuote['quote'],
          author: randomQuote['author']
        })
      })
  }


  getNewQuote = () => {
    this.getQuote()
  }

  componentDidMount(){
    this.getQuote()
  }


  render(){
    const {quote, author} = this.state
    return (
      <div id="wrapper" >
        <h1 className="title" >Random Quotes application </h1>

        <div id="quote-box" >
          <QuoteBox quote={quote} author={author} />

          <div id="buttons" >
            <TwitterShare quote={quote} author={author} />
            <Button id="new-quote" title="new Quote" onClick={this.getNewQuote} />
          </div>
        </div>
      </div>

    )
  }




}


export default App;

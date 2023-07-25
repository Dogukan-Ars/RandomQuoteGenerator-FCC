import { useState } from 'react'
import quotes from "./assets/quotes.json"
import { FaTwitter, FaTumblr, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import './App.css'

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 160)
  const blue = Math.floor(Math.random() * 160)
  const green = Math.floor(Math.random() * 160)

  return `rgb(${red}, ${blue}, ${green})`
}

const transition = "all 1s"

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote())
  const [randomColor, setRandomColor] = useState<string>(getRandomColor())

  const handleChange = () => {
    setQuote(getRandomQuote())
    setRandomColor(getRandomColor())
  }

  return (
    <div className='background' style={{ backgroundColor: randomColor, transition }}>
      <div className="quote-box">
        <div className='quote-content' style={{ color: randomColor, transition }}>
          <h2 id='text'>
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          </h2>
          <h4 id='author'>
            - {quote.author}
          </h4>

          <div className='buttons' style={{ color: randomColor, transition }}>
            <div className="buttons-left">
              <a id="tweet-quote" title="Tweet this quote!" style={{ backgroundColor: randomColor, marginRight: "10px", transition }} target="_blank" href={`https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=${quote.quote}`}>
                <FaTwitter color="white" size="20" style={{ alignItems: "center", justifyContent: "center"}} />
              </a>
              <a id="tumblr-quote" title="Post this quote on tumblr!" style={{ backgroundColor: randomColor, marginRight: "10px", transition }} target="_blank" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Vincent%20van%20Gogh&amp;content=I%20would%20rather%20die%20of%20passion%20than%20of%20boredom.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button">
                <FaTumblr color="white" size="20" style={{ alignItems: "center", justifyContent: "center"}} />
              </a>
            </div>
            <div className='buttons-right'>
              <button id='new-quote' onClick={handleChange} style={{ backgroundColor: randomColor, transition }}>Change Quote</button>
            </div>
          </div>
        </div>

        <div className='footer'>
          <small>by <a href="https://github.com/Drynwhyll" target='_blank'>Dogukan</a></small>
        </div>
      </div>
    </div>
  )
}

export default App

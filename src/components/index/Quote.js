import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import quoteImg from "../../images/tango_quote.svg"
import { QuoteWrapper } from "./styles/QuoteStyles"

const Quote = () => {
  const data = useStaticQuery(graphql`
    {
      wordpressPage(wordpress_id: { eq: 28 }) {
        acf {
          quote_1_text
          quote_1_author
        }
      }
    }
  `)

  return (
    <QuoteWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={quoteImg} alt="Quote" />
            <h6>{data.wordpressPage.acf.quote_1_text}</h6>
            <h4>{data.wordpressPage.acf.quote_1_author}</h4>
          </div>
        </div>
      </div>
    </QuoteWrapper>
  )
}

export default Quote

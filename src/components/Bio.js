import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          <strong>大要要</strong> 是个程序员，目前专注于基于 Web 技术的应用开发
        </p>
      </div>
    )
  }
}

export default Bio

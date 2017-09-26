import React from 'react'

const Cassette = () => {
  return(
    <div className="cassette">
      <div className="tape">
        <div className="screws">
          <i></i><i></i><i></i><i></i><i></i>
        </div>
        <div className="outdent"></div>
        <div className="holes">
          <i></i><i></i><i></i><i></i>
        </div>
        <div className="label">
          <div className="inner">
            <div className="lines">
              <i></i><i></i><i></i>
            </div>
            <div className="stripes">
              <i></i><i></i>
            </div>
            <div className="cutout">
              <div className="wheel">
                <i></i><i></i><i></i><i></i><i></i><i></i>
              </div>
              <div className="wheel">
                <i></i><i></i><i></i><i></i><i></i><i></i>
              </div>
              <div className="window">
                <div className="spool-left"></div>
                <div className="spool-right"></div>
                <div className="reel-left"></div>
                <div className="reel-right"></div>
              </div>
              <div className="ticks"></div>
            </div>
            <p className="quality">High Quality<br/>Sound</p>
            <p className="type">X<span>60</span></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cassette

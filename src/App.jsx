import { useState } from 'react'
import ReactPlayer from 'react-player'

function App () {
  const url = 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8'
  return (
    <div className="App">
      <ReactPlayer url={url} playing muted controls/>
    </div>
  )
}

export default App

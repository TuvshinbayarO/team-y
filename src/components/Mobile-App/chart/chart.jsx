import React from 'react'
// import background from '/img/second.png'

const Chart = () => {
  return (
    <div  style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}} className=''>
      
        <img src='/img/second.png' />
        <div style={{ marginTop: '10px'}} className=''>
          <img src='/img/third.png' />   
          <img style={{ marginTop: '10px'}} src='/img/first.png' />
          <img style={{ marginTop: '10px'}} src='/img/five.png' />
          <img style={{ marginTop: '10px'}} src='/img/six.png' />
        </div>
      
    </div>
  )
}

export default Chart
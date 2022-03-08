import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Card from './Component/Card'

// receving and passing the data

ReactDOM.render(

  <>
    <h1 style={{color:'black',marginBottom:'px'}} id='main-line' className='animate-charcter'>NETFLIX TOP 3</h1>
    <marquee><h5>some more features comming soon...</h5></marquee>
    <div class="container">
  <div class="row">
    <div class="col-sm-4 text-center">
      <h3 class="animate-charcter"></h3>
    </div>
  </div>
</div>
    {Card.map((val) => {
      return (
        <>
          <App
            title={val.title}
            sname={val.sname}
            src={val.src}
          /> 
          </> 
      )
    })
    }
  </>,


  document.getElementById('root')
)

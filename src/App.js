import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';



/*class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 10
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (

    
      <div className="container">
                        <div className="row">
       <div className="col-sx-6">
       <i className="fa fa-volume-off fa-2x" aria-hidden="true"></i>
       </div>
       <div className="col-sx-6">
       <div className='slider'>
      <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        </div>
           </div> 
      </div>
    </div>
    
    )
  }
}


export default Horizontal;*/

//<div className='value'>{value}</div>

const SoundHelp = () =>{
  return(
    <div>
      <footer>
   <span> <img src ="../descarga.jpg"/></span>
 
 
 
   <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>
   
   <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-sm">
       <div class="modal-content">
         ...
       </div>
     </div>
   </div>
 </footer>
 <a href="#miModal">Abrir Modal</a>
<div id="miModal" class="modal">
  <div class="modal-contenido">
    <a href="#">X</a>
    <h2>Mi primer Modal</h2>
    <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
  </div>  
</div>
</div>



  )
}

export default SoundHelp;
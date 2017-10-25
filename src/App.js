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
   <div className="container su-windowssmall">
     <div>
     <span>Conectar a un dispositivo</span><a href="https://www.spotify.com/connect/?utm_source=wp-picker&utm_medium=web"><i class="fa fa-question-circle" aria-hidden="true"></i></a>
     </div>
     <img src="../connect_header@1x.png"/>
     <div>
       <p>
       Escucha y controla Spotify en todos tus dispositivos.
       Arranca Spotify en otro dispositivo y por arte de magia aparecerá aquí.
       </p>
       </div>
       <a className="btn btn-blue btn-small" href="https://www.spotify.com/connect/?utm_source=wp-picker&utm_medium=web" >
        SABER MAS
       </a>
       !-- El botón para abrir el cuadro -->
<button type="button" className="btn btn-primary"
		data-toggle="modal" data-target="#miCuadroModal1">
   
  <div className="laptop"></div>
  <div className="speaker"></div>
 </button>


<div id="miCuadroModal1" class="modal fade" role="dialog" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">×</button>
				<h4 class="modal-title">Cuadro modal #1</h4>
			</div>
			<div class="modal-body">
				<p>
					Esto ha sido el primer ejemplo de uso de un cuadro modal con bootstrap.
				</p>
				<p>
					Un detalle importante es que en este ejemplo se define el cuadro en la propia página, en el HTML.
					Aunque el usuario no lo vea su pantalla, el cuadro está ahí, incluso se podría ver su código HTML
					con la opción de ver código fuente del navegador.
				</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
			</div>
		</div>
	</div>
</div>
     </div>
     
 </footer>

</div>



  )
}

export default SoundHelp;
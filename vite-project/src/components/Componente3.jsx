import switchConsole from '../assets/img/switchConsole.png'
import PropTypes from 'prop-types';

export const Componente3 = ( {className}) => {
  return (
    <div className={`image-container ${className}` }>
      <img src={switchConsole} alt ="switchConsole" className="image"/>
      </div>
  )
}

//todo prop que venga como argumento en la firma del metodo,
// se debe confgigurar el tipo 
Componente3.PropTypes ={ 
  className:PropTypes.string
}



import pcGaming from '../assets/img/pc gaming.jpg'
import PropTypes from 'prop-types';

export const Componente6 = ( {className}) => {
  return (
    <div className={`image-container ${className}` }>
      <img src={pcGaming} alt ="pcGaming" className="image"/>
      </div>
  )
}

//todo prop que venga como argumento en la firma del metodo,
// se debe confgigurar el tipo 
Componente6.PropTypes ={ 
  className:PropTypes.string
}




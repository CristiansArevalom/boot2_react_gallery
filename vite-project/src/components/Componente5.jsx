import phone from '../assets/img/phone.jpg'
import PropTypes from 'prop-types';

export const Componente5 = ( {className}) => {
  return (
    <div className={`image-container ${className}` }>
      <img src={phone} alt ="Paisaje" className="image"/>
      </div>
  )
}

//todo prop que venga como argumento en la firma del metodo,
// se debe confgigurar el tipo 
Componente5.PropTypes ={ 
  className:PropTypes.string
}


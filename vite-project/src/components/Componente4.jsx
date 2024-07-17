import steamDeck from '../assets/img/steamDeck.jpg'
import PropTypes from 'prop-types';

export const Componente4 = ( {className}) => {
  return (
    <div className={`image-container ${className}` }>
      <img src={steamDeck} alt ="Paisaje" className="image"/>
      </div>
  )
}

//todo prop que venga como argumento en la firma del metodo,
// se debe confgigurar el tipo 
Componente4.PropTypes ={ 
  className:PropTypes.string
}



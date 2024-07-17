import ps4 from '../assets/img/ps4.png'
import PropTypes from 'prop-types';

export const Componente2 = ( {className}) => {
  return (
    <div className={`image-container ${className}` }>
      <img src={ps4} alt ="ps4" className="image"/>
      </div>
  )
}

//todo prop que venga como argumento en la firma del metodo,
// se debe confgigurar el tipo 
Componente2.PropTypes ={ 
  className:PropTypes.string
}



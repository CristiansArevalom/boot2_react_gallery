import XBOX from '../assets/img/XBOX.jfif'
import PropTypes from 'prop-types';

export const Componente1 = ( {className}) => {
  return (
    <div className={`image-container ${className}` }>
      <img src={XBOX} alt ="XBOX" className="image"/>
    </div>
  )
}

//todo prop que venga como argumento en la firma del metodo,
// se debe confgigurar el tipo 
Componente1.PropTypes ={ 
  className:PropTypes.string
}


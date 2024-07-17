import { Link } from "react-router-dom"
import { Componente1 } from "./Componente1"
import { Componente2 } from "./Componente2"
import { Componente3 } from "./Componente3"
import { Componente4 } from "./Componente4"
import { Componente5 } from "./Componente5"
import { Componente6 } from "./Componente6"

export const Navigation = () => {
  return (
    <div className="container mt-4 father">

      <Link to ="/componente1"className='links'>
      <figure className="image-size">
                    <Componente1/>
            <figcaption>Xbox</figcaption>

        </figure>
      </Link>

      <Link to ="/componente2"className='links'>
      <figure className="image-size">
                    <Componente2/>
            <figcaption>PS4</figcaption>
        </figure>
      </Link>

      <Link to ="/componente3"className='links'>
      <figure className="image-size">
                    <Componente3/>
            <figcaption>Switch</figcaption>
        </figure>
      </Link>


      <Link to ="/componente4"className='links'>
      <figure className="image-size">
                    <Componente4/>
            <figcaption>Steam deck</figcaption>
        </figure>
      </Link>

      <Link to ="/componente5"className='links'>
      <figure className="image-size">
                    <Componente5/>
            <figcaption>Gamer Phoene</figcaption>
        </figure>
      </Link>

      <Link to ="/componente6"className='links'>
      <figure className="image-size">
                    <Componente6/>
            <figcaption>PC GAMER  </figcaption>
        </figure>
      </Link>
    </div>
  )
}


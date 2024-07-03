import { Link } from "react-router-dom"
import { Componente1 } from "./Componente1"
import { Componente2 } from "./Componente2"
import { Componente3 } from "./Componente3"
import { Componente4 } from "./Componente4"
import { Componente5 } from "./Componente5"
import { Componente6 } from "./Componente6"

export const Navigation = () => {
  return (
    <div>

      <Link to ="/componente1">
        <figure>
            <Componente1/>
            <figcaption>Coveñas1</figcaption>

        </figure>
      </Link>

      <Link to ="/componente2">
        <figure>
            <Componente2/>
            <figcaption>Coveñas2</figcaption>
        </figure>
      </Link>

      <Link to ="/componente3">
        <figure>
            <Componente3/>
            <figcaption>Coveñas3</figcaption>
        </figure>
      </Link>


      <Link to ="/componente4">
        <figure>
            <Componente4/>
            <figcaption>Coveñas4</figcaption>
        </figure>
      </Link>

      <Link to ="/componente5">
        <figure>
            <Componente5/>
            <figcaption>Coveñas5</figcaption>
        </figure>
      </Link>

      <Link to ="/componente6">
        <figure>
            <Componente6/>
            <figcaption>Coveñas6</figcaption>
        </figure>
      </Link>
    </div>
  )
}


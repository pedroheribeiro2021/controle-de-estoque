import { useContext } from "react"
import { EntradasContext } from "../../Contexts/entradasContexts"


export const EstoqueContainer = () => {
    
    const {items} = useContext(EntradasContext)

    return (
        <ul>
            {
                items.map((item) => 
                <li>
                    <p> {item.nome} </p>
                    <span> {item.quantidade} </span>
                </li>
                )
            }
        </ul>
    )
}
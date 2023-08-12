import React from 'react'
import { Link } from "react-router-dom"
// Importation de donnée depuis la liste de base de donnée 
import records from "../Datas/logements.json"
// Importation du style 
import "../Styles/Cards.scss"

// composant qui permet de récupérer la liste des logements et de les afficher sous forme de card

const Cards = () => {
    return (
        <div className="logements">

            {/* liste la base de données */}

{/* La méthode  map()  permet facilement d'itérer sur des données et de retourner un tableau d'éléments.  */}
            {records.map((record) => {
                const { id, cover, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
// Les  key (clés) aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. Vous devez donner une clé à chaque élément dans un tableau, afin d’apporter aux éléments une identité stable
//  Elle doit être unique au sein du tableau. 
// Et stable dans le temps (pour la même donnée source, on aura toujours la même valeur de key=).
                    <div className="fiche-logement" key={id}>

                        <Link to={{ pathname: "/Logement", search: "?_id="+id }}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards

// id : cover : title 
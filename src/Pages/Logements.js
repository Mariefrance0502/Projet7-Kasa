import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from "../Components/Navbar/Navbar"
import Main from "../Components/Main/Main"
import ErrorPage from "./ErrorPage"
import Collapse from '../Components/Collapse/Collapse'
import Carousel from '../Components/Carousel/Carousel'
import "../Styles/Logements.css"
import Datas from "../Datas/logements.json"
import Footer from '../Components/Footer/Footer'


 
const arrayStars = [1, 2, 3, 4, 5]

function Logements() {
   
    const [searchParams] = useSearchParams();
  
    const [idLogement] = useState(searchParams.get('_id'));
    
    const data= Datas.find(element => element.id === idLogement)
    
    if (!data) return(<ErrorPage />)

    const equipements = data.equipments.map((element, index) => (
          <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
        ))
    

    return (
        <div className='logement'>
            <Main>
                <Navbar />
                <Carousel pictures={data.pictures}/>
                <div className='ficheLogement'>
                    <div className='div-description'>
                        <h1>{data.title}</h1>
                        <h4>{data.location}</h4>
                        <div className='div-tags'>
                            { data.tags.map((element, index) => {
                                return(<p className='tags' key={"tags-"+index}>{element}</p>)
                            })}
                        </div>
                    </div>
                    <div className='bloc-stars'>
                        <div className='div-etoiles'>
                            <p>{data.host.name}</p>
                            <img src={data.host.picture} alt={data.title} />
                        </div>
                        <div className='stars'>
                            {
                                arrayStars.map(element => {
                                    const nbreEtoiles = parseInt(data.rating)
                                    return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='collapseLogement'>
                    <Collapse title="Description" content={data.description} />
                    <Collapse title="Equipements" content={equipements} />
                </div>
            </Main>
            <Footer/>
        </div>
    )
}

export default Logements
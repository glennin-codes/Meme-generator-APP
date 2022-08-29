import  React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceLaugh} from '@fortawesome/free-solid-svg-icons'
import "./main.css"
import { properties } from "./memesdata";
export default function  Meme ()
{
    const [arrayPerson , setArrayPerson]=React.useState(["person 1","person 2"])
    const [memeImg, setMemeImg]=React.useState("")
    function getImageUrl(){
        const memesArray=properties.data.memes
        const randomNum=Math.floor(Math.random()*memesArray.length)
        const Url = memesArray[randomNum].image
        setMemeImg(Url)
        
    }
       function addItem(){
        setArrayPerson(prevArrayPerson=>[...prevArrayPerson,`person ${arrayPerson.length + 1}`])
       }
       const  getItems= arrayPerson.map(person=><p key={person}>{person}</p>)
    return(
        <main className="app--wrapper"> 
        <button className="add" onClick={addItem}>add item</button>
                 {getItems}
        
            <div className="form">
                     <input type="text" 
                            className="form--inputs" 
                            placeholder="top text"  
                            
                     />
                     <input type="text" 
                            className="form--inputs"  
                            placeholder="bottom text"
                     />
                   
                       <button  className="form--button" onClick={getImageUrl}>
                              Get a new meme image 
                              <FontAwesomeIcon icon={faFaceLaugh} style={{color:"blue" ,paddingLeft:"10px"}}>

                              </FontAwesomeIcon>
                      
                      </button>
                  
            </div>
              <img  src={memeImg} alt="a meme " className="meme--Img"/>
           
        </main>
    )

}
 

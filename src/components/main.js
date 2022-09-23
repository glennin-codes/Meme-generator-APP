import  React, { useState ,useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceLaugh} from '@fortawesome/free-solid-svg-icons'
import "./main.css";
// import  {Properties} from './memesdata'
export default function  Meme ()
{
 
        
   
       
   
    const [memesData,setMemesData]=useState(
        {
               topText:"",
               bottomText:"",
               randomImg:"https://i.imgflip.com/xh3me.jpg"

    })
     const [allMemes,setAllMemes]=useState([])
     useEffect ( () => {
        async function getMeme(){
        const res=await fetch(' https://api.imgflip.com/get_memes')
        const data = await res.json()
        setAllMemes(data.data.memes)
        }
        getMeme()

      
     },[] )
    //  console.log(allMemes);
    function getImageUrl(){

        const randomNum=Math.floor(Math.random()*allMemes.length)
        const Url = allMemes[randomNum].url
        setMemesData((prevMemes=>
            ({...prevMemes,randomImg:Url})
        ))
    }
  
       function handleChange (event){
       
            const{name,value}=event.target
                setMemesData(prevData=>({
                    ...prevData, [name]:value
                }))
            
       }
          function handleSubmit (event){
            console.log(memesData);
            event.preventDefault()
          }
     return(
        <main className="app--wrapper">
            <div className="main--contents">
            <form className="form" onSubmit={handleSubmit} action='POST'>
                     <input type="text" 
                            className="form--inputs" 
                            placeholder="top text" 
                            name='topText' 
                            value={memesData.topText}
                            onChange={handleChange}                         
                            
                     />
                     <input type="text" 
                            className="form--inputs"  
                            placeholder="bottom text"
                            name='bottomText'
                            value={memesData.bottomText}
                            onChange={handleChange}                    
                     />
                   
                       <button  className="form--button" onClick={getImageUrl}>
                              Get a new meme image 
                              <FontAwesomeIcon icon={faFaceLaugh} style={{color:"blue" ,paddingLeft:"10px"}}>

                              </FontAwesomeIcon>
                      
                      </button>
                  
            </form>
                    
                    <div className="action">
                        <img  src={memesData.randomImg} alt="a meme " className="meme--Img"/>
                            <div className="text--content">
                                <h2 className='text--topText'>{memesData.topText}</h2>
                                <h2 className='text--bottomText'>{memesData.bottomText}</h2>
                            </div>
                     </div>
              </div>
          
        </main>
    )
 
}
 

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";


const Score = ({mode,review}) => {

    const [score , setScore] = useState(null)


    useEffect(() => {

      console.log(review)
      
      mode === "review" && setScore(review)
     
    }, [])
    

    const rating = [1,2,3,4,5]

     const handleScore = (e)=>{


         if(e.target.tagName === "path"){
            const star = e.target.parentNode
        
          setScore(star.attributes.starscore.nodeValue)
          
         }

         else if(e.target.tagName === "svg"){    
          setScore(e.target.attributes.starscore.nodeValue)
         }

     }

  return (
    <div className='box-score-star'>

          {
            rating.map((el,i) => <FontAwesomeIcon key={el} style={{width:"25px"}}  onMouseEnter={(e)=> mode !== "review" &&  handleScore(e)} onMouseLeave={(e)=> mode !== "review" && setScore(null)}  starscore={el} color={score >= i+1 ? "#e2e518" : "#D7D7D7" } onClick={(e)=> mode !== "review" &&  handleScore(e) } icon={faStar}></FontAwesomeIcon> )
          }

    </div>
  )
}

export default Score
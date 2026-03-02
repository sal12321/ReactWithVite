 import {useState} from "react"
 export default function LikeBtn(){

    let liked =  'fa-solid fa-heart';
    let notLiked =  'fa-regular fa-heart';


    let [isLiked , setIsLiked] = useState("false");
    

    let toggleLike = () =>{
    
    isLiked = !isLiked;
    console.log("LikeBtn cliked");

    // setIsLike((prev) => {
    //     return !prev; // when this is don
    // });
    setIsLiked(isLiked);

    console.log(isLiked);
}




    return (

        <>
        <button onClick={toggleLike}>
            {/* {isLiked.toString()} */}
          <i className={isLiked ? liked : notLiked}> </i>

        </button>

        <p>
            
          {/* <i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}> </i> */}
          {/* <i className={isLiked ? liked : notLiked}> </i> */}
        </p>
        
        </>

    )
     
 }


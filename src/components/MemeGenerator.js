import React, {useState, useEffect} from "react"

/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */

  /**
     * We'll be using an API that provides a bunch of meme images.
     * 
     * Your task:
     * make an API call to "https://api.imgflip.com/get_memes" and save the 
     * data that comes back (`response.data.memes`) to a new state property
     * called `allMemeImgs`. (The data that comes back is an array)
     */

function MemeGenerator(){
    const [ topText, setTopText] = useState("") 
    const [ bottomText, setBottomText] = useState("") 
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImgs, setAllMemeImgs] = useState([])

  
  
    useEffect(async () => {
        
    const url = `https://api.imgflip.com/get_memes`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        setAllMemeImgs(response.data.memes);
        } catch (err) {
        console.error(err);
        }
    }, []);

    function handleSubmit(event){
          event.preventDefault()
          // get a random int (index in the array)
        const randomNumber = getRandomInt(0, allMemeImgs.length)
        function getRandomInt(max, min) {
            return Math.floor(Math.random() * (max - min) + min); 
        }
        setRandomImg(allMemeImgs[randomNumber].url)
      
    }
  

    return(
        <>
        <div>
                <form className="meme-form" onSubmit={handleSubmit}>
                    <input  type="text"
                            name="topText"
                            value={topText}
                            onChange={event => {setTopText(event.target.value)}} />
                            <br/>
                    <input  type ="text"
                            name="bottomText"
                            value={bottomText}
                            onChange={event => {setBottomText(event.target.value)}} />

                    
                     
                
                    <button>Gen</button>
                </form>
    
                <div className="meme">
                    <img src={randomImg} alt="" />
                    <h2 className="top">{topText}</h2>
                    <h2 className="bottom">{bottomText}</h2>
                </div>
            </div>
        </>
    )
}

export default MemeGenerator
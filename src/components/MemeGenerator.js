import React, {useState, useEffect} from "react"

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
        } 
    catch (err) {
                console.error(err);
        }
    }, []);

    function handleSubmit(event){
        event.preventDefault()

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
                <button>Generate Meme!</button>
            </form>
    
            <div className="meme">
                <img class="image-center" src={randomImg} alt="random meme" />
                <h2 className="top">{topText}</h2>
                <h2 className="bottom">{bottomText}</h2>
            </div>
            </div>
        </>
    )
}

export default MemeGenerator
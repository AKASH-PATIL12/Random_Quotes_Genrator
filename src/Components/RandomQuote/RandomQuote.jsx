import React, { useState } from "react";
import "./RandomQuote.css";
import ShareIcon from "@mui/icons-material/ShareOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

const RandomQuote = () => {

    // STORE DATA FETCHED FROM API
    let quotes = [];

    // FUNCTION TO LOAD DATA FROM API IN QUOTES ARRAY
    async function loadQuotes(){

        //STORE RESPONSE FROM API
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
       
    }

    //FUNCTION FOR RANDOM BUTTON
    const random = () =>{
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);

    }

    //FUNTION OR SHARING
    const share =()=>{
        window.open(`https://wa.me/?text=${quote.text} - ${quote.author.split(',')[0]} `);
    }


  const [quote, setQuote] = useState({
    text: "Be your own boss will you go ahed kjh kjhksiof kjhisd ",
    author: "Akash Shivaji Patil ",
  });

  //Calling funtion loadQuotes
  loadQuotes();

  return (
    <div className=" flex flex-col m-auto w-[800px] rounded-[20px] mt-[250px] items-center bg-[#121212] text-cyan-100 ">
      <div className="p-[30px] text-[white] text-center text-[32px]">
        {quote.text}
      </div>
      <div className="line w-[680px] h-[1.5px] bg-white"></div>
      <div className=" flex flex-row gap-[300px] items-center mt-[30px] mb-[30px] ">
        <div className="author text-[white] text-[20px] mr-9">- {quote.author.split(',')[0]}</div>
        <div className="icons flex gap-5">
            <div className="cursor-pointer" onClick={()=>{random()}}><CachedOutlinedIcon></CachedOutlinedIcon></div>
            <div className="cursor-pointer" onClick={()=>{share()}}><ShareIcon ></ShareIcon></div>
         
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;

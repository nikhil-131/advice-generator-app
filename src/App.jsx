import { useEffect, useState } from 'react'
import './App.css'
import desktop from "./assets/images/desktop.svg"
import mobile from "./assets/images/mobile.svg"
import dice from "./assets/images/dice.svg"

function App() {
  const [adviceslip, setAdviceslip] = useState({
    id: '',
    advice: ''
  });
  useEffect(() => {
    // alert("first");
    (async () => {
      let api = await fetch("https://api.adviceslip.com/advice");
      let response = await api.json();
      setAdviceslip(response.slip);
    })();
  }, [])

  const handleClick = async (event) => {
    let api = await fetch("https://api.adviceslip.com/advice");
    let response = await api.json();
    setAdviceslip(response.slip);
  }

  return (
    <>
      <div className="container lg:w-[40%] md:w-[60%] h-fit  bg-[#323a49] absolute top-0 bottom-0 left-0 right-0 m-auto rounded-2xl p-6 flex items-center justify-center flex-col">
        <div className="adviceID flex justify-center items-center">
          <p className='text-[#52ffa8] text-sm tracking-[0.25rem]'>ADVICE #{adviceslip.id}</p>
        </div>
        <div className="advice flex justify-center items-center text-center font-bold px-10 py-8">
          <h1 className='text-white text-3xl'>“{adviceslip.advice}”</h1>
        </div>
        <div className="designImg pb-7">
          <picture>
            <source media="(max-width: 640px)" srcSet={mobile} />
            <img src={desktop} alt="" />
          </picture>
        </div>
        <div className="dice flex justify-center">
          <button onClick={handleClick} className='bg-[#52ffa8] p-4 rounded-full absolute bottom-[-28px] transition-all ease-in-out duration-300 hover:shadow-[0px_0px_55px_5px_#52ffa8]'><img src={dice} alt="dice" /></button>
        </div>
      </div>
    </>
  )
}

export default App

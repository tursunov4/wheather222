import axios from 'axios'
import React , {useEffect, useState} from 'react'
import './Assets/main.css'
import Images from './components/Helper/Images'
function App() {
  const [sity, setSity] = useState('Tashkent') 
  const [state , setState] = useState('metric')  
  const [lastData , setLastData] = useState({})
  const handleKeyup =(evt)=>{
   if(evt.code ==='Enter'){
    setSity(evt.target.value)
   }
  }


  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=eafbbe8f57c5649128e1da7196686d17&units=${state}`)
    .then((res) =>{
      setLastData(res.data)
    })
  }, [state, sity])
  return (
    <div className='w-full px-3 h-[100vh] bg-blue-400'>
        <div className="max-w-[600px] mx-auto pt-8">
        <div className="flex items-center mb-5 justify-center space-x-5">
         <input type="text"  onKeyUp={handleKeyup} className={'border-2 p-2 border-slate-500 rounded-md w-[300px]'} 
         placeholder="typing" />
         <button className="bg-red-500 text-white text-[16px]  p-2.5 w-[100px] rounded-md font-semibold">
          Find
         </button>
        </div>
               <div>
        <h1 className='text-[30px] mb-2 text-white'>{lastData?.name}</h1> 
        <p className='text-[25px] mb-2 text-white'  >{lastData?.main?.temp}</p>
        <p className='text-[25px] mb-2 text-white'   >{lastData?.weather && lastData?.weather[0].main}</p>
          <Images id={lastData?.weather && lastData?.weather[0].id}/>
       </div>
       </div>

    </div>
  )
}

export default App
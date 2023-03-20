  import thun from '../../Assets/Images/thun.png'
  import driz from '../../Assets/Images/driz.png'
  import rain from '../../Assets/Images/rain.png'
  import snow from '../../Assets/Images/snow.png'
  import wind from '../../Assets/Images/wind.png'
  import clear from '../../Assets/Images/clear.png'
  import cloud from '../../Assets/Images/cloud.png'

  
  const  Images =({id}) =>{
    if(id >=200 && id<= 232){
        return (
         <img src={thun} alt='thun' width={300} height={300}/>
        )
    }
    if(id >=300 && id<= 321){
        return (
            <img src={driz} alt='driz' width={300} height={300}/>
        )
    }
    if(id >=500 && id<= 521){
        return (
            <img src={rain} alt='rain' width={300} height={300}/>
        )
    }
    if(id >=600 && id<= 622){
        return (
            <img src={snow} alt='snow' width={300} height={300}/>
        )
    }
    if(id >=701 && id<= 781){
        return (
       
          <img src={wind} alt='Atmosphere' width={300} height={300}/>
        )
    }
    if(id >=800){
        return (
            <div>
                <img src={clear} alt='thun' width={400} height={400}/>
            </div>
        )
    }
    if(id >=801 && id <= 804){
        return (
            <img src={cloud} alt='thun' width={400} height={400}/>
        )
    }
}
export default Images;
   
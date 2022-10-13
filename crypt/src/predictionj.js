import React,{useEffect,useState} from 'react'
import Header from './components/header'
import bitpng from './bittdy.png'
import './index.css';


export default function Pedictionj() {

    // const [data,setData] = useState([{}])
    // useEffect(()=> {
    //     fetch("/predi",{ mode: 'no-cors'}).then(
    //         res => res.json()
            
    //     .then(
            
    //             data =>{
    //                 console.log(data)

    //             }
                
            
    //     ).catch(error => console.error(error)));
    // },[])
    return (
        <div>
           <Header/>
           <img className='pred_img' src = {bitpng} />
        </div>
    )
}

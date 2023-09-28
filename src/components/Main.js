import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';


export default function Main(props) {

//   const advice = document.getElementsByClassName('advice')[0];

//   fetch("https://api.adviceslip.com/advice")
//   .then((response) => response.json())
//   .then((data)=>{
//     // adviceId.innerHTML = data.slip.id;
//     advice.innerHTML   = data.slip.advice;
           
//   });

    const [advicee, setAdvicee] = useState([])

    useEffect(()=>{
        let data = async ()=>{
            let response = await axios.get('https://api.adviceslip.com/advice')
            console.log(response);
            setAdvicee(response.data)
        }
        data()
    }, [])
    
    let morefetch = async ()=>{
        let response = await axios.get('https://api.adviceslip.com/advice')
        setAdvicee(response.data)
    }

    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name') || 'No name provided';

  return (
    <div className='body_main' style={{display:'flex',placeitems: 'center',justifyContent:'center',alignItems:'center', }}>
    <div className='container ' >
            <div className="card1 text-center"  >
                <div className="card-header" style={{fontSize:'1.5rem', padding:'10px'}}>Adivce for My Dear <b>{name}</b></div>
                <div className="card-body">
                    <h5 className="card-title"style={{fontSize:'5.5rem', paddingTop:'150px'}}>{advicee.slip?.advice}</h5>
                    {/* <Link to="/main" className="btn btn-primary">Go somewhere</Link> */}
                    <div className="card-footer">
                    <button className="btn" onClick={morefetch} style={{fontSize:'1.5rem', paddingTop:'55px'}}>Get More</button>
                    </div>
                </div>
            </div>              
        </div>
    </div>
  )
}

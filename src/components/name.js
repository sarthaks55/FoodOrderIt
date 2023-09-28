import React, {useState}  from 'react'
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
//import Main from './Main';



    const Name=(props)=> {   
    const navigate = useNavigate();
    const navigates=(e)=>{
        // handle your login logic
        navigate(`/main?name=${inputValue}`); // use either relative or absolute path both will work,navigate to help page or wherever want to navigate
        e.preventDefault();
        // let Naam = e.target.value;
        // console.log("name"+Naam);
        
    };

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

    // const [name, setName] = useState(null)
    
   

   

  return (
    <div className='body1' style={{display:'grid',placeitems: 'center',justifyContent:'center',alignItems:'center', height:'100vh' }}>
    <div className='container d-flex aligns-items-center justify-content-center ' >
            <div className="card text-center " >
                <div className="card-body">
                    <h5 className="card-title">Please Enter your शुभ नाम   :)</h5>
                    <div className="input-group my-4 mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" value={inputValue} onChange={handleInputChange} id='namebox'  aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={navigates}>Next</button>
                     </div>
                    {/* <Link to="/main" className="btn btn-primary">Go somewhere</Link> */}
                </div>
            </div>              
        </div>
    </div>

    
  )
}


export default Name;


 // const [name, setName] = useState({});
    // const handleChange = (e) => {
    //     setName({ ...name, [e.target.name]: e.target.value });
        
    //   };




    // e.preventDefault();
        // navigate({
        //   pathname: '/main',
        //   state: name,
        // });





import React,{useState} from 'react';
import {Form, Button} from "react-bootstrap";
const CityInput = ({city,setCity,fetchCityWeather}) => {
    const [error,setError] = useState("");
    const handleInputChange =(event)=>{
      setCity(event.target.value);
    };
    const handleSubmit =(event)=>{
       if(!city){
         setError("City field is empty");
       }else{
         setError("");
         fetchCityWeather(city);
         console.log()
       }
    };
    

    return (
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control value={city} type="text" placeholder="Enter City" onChange={handleInputChange} />
          </Form.Group>
          <p className="text-danger ">{error}</p>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
    );
};

export default CityInput;
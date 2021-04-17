import React, { useState } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [age, setAge] = useState(0);
  const [weigth, setWeigth] = useState(0);
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState(1);
  const [bmi, setBMI] = useState();

  const handleClickPlusWeight = () => {
    setWeigth(weigth + 1);
  }

  const handleClickMinusWeight = () => {
    setWeigth(weigth - 1);

    if(weigth <= 0){
      alert("Weight must be greater than 0!")
      setWeigth(0)
    } 
  }

  const handleClickPlusAge = () => {
    setAge(age + 1);
  }

  const handleClickMinusAge = () => {
    setAge(age - 1);

    if(age <= 0){
      alert("Age must be greater than 0!")
      setAge(0)
    } 
  }

  const handleChangeHeight = (event, newValue) => {
    setHeight(newValue)
  }


  const calculateBMI = () => {
    setBMI(weigth / (Math.pow(height / 100, 2)));
  }

  const validate = () => {
    if(gender && height !== 0 && weigth && age){
      calculateBMI();
    }else{
      alert("ERROR: you forgot fill data!");
    }
  }

  return (
    
      <div className="bmi">
          <h2>BMI calculator</h2>

          <form>
            <p className="gender-text">{gender ? gender : 'Choose your gender'}</p>
            <button type="button" className="gender-btn male" onClick={() => setGender('Male')}><FontAwesomeIcon icon={faMale} size="2x"/><br />Male</button>
            <button type="button" className="gender-btn female" onClick={() => setGender('Female')}><FontAwesomeIcon icon={faFemale} size="2x"/><br />Female</button>

            <div className="slider">
              <Typography id="non-linear-slider" gutterBottom>
                Height
              </Typography>

              <Slider 
                className="slider-line"
                value={height}
                min={1}
                max={220}
                step={1}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
                onChange={handleChangeHeight}
              />
            </div>

            <div className="weight-counter">
              <label htmlFor="weight">Weight</label>
              <p className="weight">{weigth}</p>
              <button type="button" className="weight-btn plus" onClick={handleClickPlusWeight}>+</button>
              <button type="button" className="weight-btn minus" onClick={handleClickMinusWeight}>-</button>
            </div>

            <div className="age-counter">
              <label htmlFor="age-counter">Age</label>
              <br />
              <p className="age">{age}</p>

              <button type="button" className="age-btn plus" onClick={handleClickPlusAge}>+</button>
              <button type="button" className="age-btn minus" onClick={handleClickMinusAge}>-</button>
            </div>
            <button type="button" onClick={validate} className="btn">Calculate your BMI</button>
            <p className="bmi-result">{bmi}</p>
          </form>
      </div>
      
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fineDustRequest } from '../reducer/finedustReducer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from 'features/finedust/styles/test.module.css'


export default function SelectVariants() {
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
    dispatch(fineDustRequest({"city":event.target.value}));
  };
  
  const dispatch = useDispatch()

  const select_styled = {
    fontSize:'3vh',
    color: 'white',
    height: '5vh'
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 2, minWidth: 120}}>
        {/* <InputLabel
        sx = {{color: 'white'}} 
        id="demo-simple-select-standard-label">우리 동네</InputLabel> */}
        <Select
          sx = {select_styled}
          className = {style.select_city}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={city}
          onChange={handleChange}
          label="우리 동네"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'종로구'}>종로구</MenuItem>
          <MenuItem value={'강남구'}>강남구</MenuItem>
          <MenuItem value={'관악구'}>관악구</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

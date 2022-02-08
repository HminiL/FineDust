import axios from "axios";
import { cityParamType } from "./finedustReducer";
const SERVER = 'http://127.0.0.1:8000/finedust'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

function fineDustSearchAPI(data: cityParamType){
    return axios.get(`${SERVER}/city/${data.city}`)
  }

export default {
fineDustSearchAPI
}
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from 'features/finedust/styles/test.module.css'


export default function Result (){
    const [pm10Value, setPm10Value] = useState(0);
    const [pm10Grade, setPm10Grade] = useState(0);
    const [pm25Value, setPm25Value] = useState(0);
    const [pm25Grade, setPm25Grade] = useState(0);

    const dust = useSelector(state => state.fineDust.dustData);
    
   useEffect(() => {
    if(dust != null){
        setPm10Value(dust.data.pm10Value);
        setPm10Grade(dust.data.pm10Grade);
        setPm25Value(dust.data.pm25Value);
        setPm25Grade(dust.data.pm25Grade);}
      }, [dust]);

 
    return (<div>
    <div class="parent" className={styles.parent}>
        <div class="pm10" className={styles.first}>
            <p className={styles.texts}>미세먼지  <br/>
                {pm10Value} <br/>
                {pm10Grade == 1 ? <p><i class="fas fa-grin-hearts fa-3x"></i> <br /> 좋음</p>: '' }
                {pm10Grade == 2 ? <p><i class="fas fa-smile fa-3x"></i> <br /> 보통</p>: '' }
                {pm10Grade == 3 ? <p><i class="fas fa-frown fa-3x"></i> <br /> 나쁨</p>: '' }
                {pm10Grade == 4 ? <p><i class="fas fa-dizzy fa-3x"></i> <br /> 매우나쁨</p>: '' }
            </p>
        </div>

        <div class="pm2.5" className={styles.second}>
            <p className={styles.texts}>초미세먼지<br/>
                {pm25Value} <br/>
                {pm25Grade == 1 ? <p><i class="fas fa-grin-hearts fa-3x"></i> <br /> 좋음</p>: '' }
                {pm25Grade == 2 ? <p><i class="fas fa-smile fa-3x"></i> <br /> 보통</p>: '' }
                {pm25Grade == 3 ? <p><i class="fas fa-frown fa-3x"></i> <br /> 나쁨</p>: '' }
                {pm25Grade == 4 ? <p><i class="fas fa-dizzy fa-3x"></i> <br /> 매우나쁨</p>: '' }
            </p>
        </div>
    </div>
    </div>)}

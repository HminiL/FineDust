import React from 'react'
import { useSelector } from 'react-redux'
import SelectVariants from 'features/finedust/components/selectbox';
import styles from 'features/finedust/styles/test.module.css'
import { Result } from '..';

const FineDustSearch = () =>{

    const dustData = useSelector(state => state.fineDust.dustData)
    return (
        <div class='fine_dust' className={styles.fine_dust}>
        <h1 class='dust_box' className={styles.dust_box} >지금 
        < SelectVariants />
        미세먼지는?</h1>
        {dustData == null? '': < Result />}
        </div>
        )}


export default FineDustSearch
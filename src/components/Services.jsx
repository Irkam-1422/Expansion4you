import React, {useEffect} from 'react'
import { Service } from './services/Service'
import styles from '../styles/Services.module.css'
import { MarketingStrategy } from './services/MarketingStrategy'
import {Footer} from './Footer' 

const services = [
  {img: 'SMA.jpg', title: 'Marketing Strategy'},
  {img: 'SMA.jpg', title: 'E-commerce'},
  {img: 'SMA.jpg', title: 'Branding'},
  {img: 'SMA.jpg', title: 'Search Engine Advertising'},
  {img: 'SMA.jpg', title: 'Social Media Advertising'},
  {img: 'SMA.jpg', title: 'Web Development'},
  {img: 'SMA.jpg', title: 'Search Engine Optimisation'}
]

export const Services = () => {

  useEffect(() => {
    const footer = document.getElementById('footer')
    if (footer) footer.style.display = 'flex'
  },[])

  return (
    <div style={{marginTop: '6vh'}}>
      <div className={styles.mainCont}>
        <div className={styles.servicesCont}>
          <h1 className={styles.servicesTitle}>Our Services</h1>
        </div>
        {services.map((service,i) => <Service service={service} i={i}/>)}
      </div>
      <div className={`${styles.footerCont} container`} style={{position: 'relative'}}>
        <Footer />
      </div>
    </div>
  )
}

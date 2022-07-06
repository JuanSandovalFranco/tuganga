import React from 'react'
import './Page404.css'
import Image404 from '../assets/image404.png'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Boton from '../components/Boton'


const Error404 = () => {
  return (
    <>
    <Header></Header>
    <div className='container-error'>
    <div className='box-image'><img src={Image404} alt="" className="image-error" /></div>
    <div className='box-info-found'>
      <h1 className='info-found'>Oh No! Pagina no encontrada</h1>
      <p className='description-error'>Esta pagina no existe o fue eliminada Si quieres puedes volver a la pagina principal</p>
      <Link to={"/"}><Boton background="rgb(255, 140, 45)">Volver a la Pagina Principal</Boton></Link>
    </div>
    </div>
    </>
  )
}

export default Error404
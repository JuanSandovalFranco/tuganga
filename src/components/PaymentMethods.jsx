import React from 'react'
import Card from './Card'
import americanExpress from '../assets/american-express.png'
import masterCard from '../assets/mastercard.png'
import visa from '../assets/visa.png'
import davivienda from '../assets/davivienda.png'
import paypal from '../assets/paypal.png'
import efecty from '../assets/efecty.png'


const styleIcon = {
    width:"2.2rem",
    heigth:"2.2rem"
}


const styleContainer = {
    display:"flex",
    alignItems:"center",
    gap:"2rem"
}

const PaymentMethods = () => {
  return (
    <div style={{width:"90%"}}>
        <Card>
            <h2>Medios De Pago</h2>
            <p>Tarjetas de Credito</p>
            <div style={styleContainer} className='cont-payment-icons'>
                <img style={styleIcon} className='icon-payment-methods-options' src={americanExpress} alt="" />
                <img style={styleIcon} className='icon-payment-methods-options' src={masterCard} alt="" />
                <img style={styleIcon} className='icon-payment-methods-options' src={visa} alt="" />
                <img style={styleIcon} className='icon-payment-methods-options' src={davivienda} alt="" />
            </div>
            <p>Pago digital</p>
            <div style={styleContainer} className='cont-payment-icons'>
                <img style={styleIcon} className='icon-payment-methods-options' src={paypal} alt="" />
               
            </div>
            <p>Pago digital</p>
            <div style={styleContainer} className='cont-payment-icons'>
                <img style={styleIcon} className='icon-payment-methods-options' src={efecty} alt="" />
               
            </div>
            
        </Card>
    </div>
  )
}

export default PaymentMethods
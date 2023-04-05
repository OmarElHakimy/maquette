import React from 'react';
import backProfil from '../../assets/images/backProfil.png';
import profil from '../../assets/images/profil.png';
import './header.css'

const Image = () => {

    return (
        <div className='col-md-12 col-lg-6 col-xl-5'>
            <div style={{width: "100%", display: "block"}}>
                <div className='box'>
                    <img className='backProfil' src={backProfil}/>
                    <img className='profil' src={profil} alt='profil'/>
                </div>
            </div>
        </div>
    )
}
export default Image;
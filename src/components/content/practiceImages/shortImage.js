import React from 'react';

const shortImage = (props) => {
    return (
            <div className='col-6 col-md-4 my-2'> 
                <div className={`img position-relative radius ${props.img}`} style={{height: "342px", width: "100%"}}>
                    <h5 className='fontTwo text-center position-absolute bottom-0 start-50 translate-middle-x' style={{fontSize: "24px"}}>{props.title}</h5>
                </div>
            </div>
    );
}
export default shortImage;
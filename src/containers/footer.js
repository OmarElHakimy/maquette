import React, {useState, useEffect} from 'react';
import logo from '../assets/images/logo.png';
import HorizentalNav from '../components/footer/horizontalNav';
import VerticalNav from '../components/footer/verticalNav';

const Footer = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [setWidth])

    useEffect(() => {
        if(width < 1000){
            setIsSmall(true);
        }else{
            setIsSmall(false)
        }
    }, [width])

    return (
        <div className='text-white' style={{backgroundColor: "#111111", marginTop: "150px", paddingTop: "80px"}}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 col-lg-3'>
                        <img src={logo} alt="eight_id" style={{width: "162px", height: "38px"}}/>
                    </div>
                    <div className='col-md-12 col-lg-6'>
                        {
                            isSmall
                            ?
                            <VerticalNav/>
                            :
                            <HorizentalNav/>
                        }
                    </div>
                    <div className='col-md-12 col-lg-3'>
                        <a className='mx-2 text-warning' href="/"><i className='h4 bi bi-instagram'></i></a>
                        <a className='mx-2 text-warning' href="/"><i className='h4 bi bi-facebook'></i></a>
                        <a className='mx-2 text-warning' href="/"><i className='h4 bi bi-twitter'></i></a>
                        <a className='mx-2 text-warning' href="/"><i className='h4 bi bi-linkedin'></i></a>
                    </div>
                </div>
                <div className='d-flex justify-content-evenly' style={{marginTop: "100px"}}>
                    <p style={{fontSize: "14px"}}><i className='bi bi-c-circle'> </i> 2020 Acme. All right reserved.</p>
                    <a className='text-white text-decoration-none' style={{fontSize: "14px"}} href="/">Privacy Policy</a>
                    <a className='text-white text-decoration-none' style={{fontSize: "14px"}} href="/">Terms of Service</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;
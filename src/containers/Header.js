import React, {useState, useEffect} from 'react';
import Content from '../components/header/content';
import Image from '../components/header/image';

const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [setWidth]);

    useEffect(() => {
        if(width < 992){
            setIsSmall(true);
        }else{
            setIsSmall(false)
        }
    }, [width]);
    
    return(
        <div className='header' style={{backgroundColor: "#111111", padding: "100px 0"}}>
            <div className='container'>
                {
                    !isSmall
                    ?
                    <div className='row'>
                        <Content/>
                        <Image/>
                    </div>
                    :
                    <div className='row'>
                        <Image/>
                        <Content/>
                    </div>
                }
            </div>
        </div>
        
    );
}
export default Header;
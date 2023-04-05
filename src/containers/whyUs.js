import React, {Component} from 'react';
import axios from 'axios';
import WhyUsLighter from '../components/content/whyUs/whyUsLighter';
import WhyUsDarker from '../components/content/whyUs/whyUsDarker';

class WhyUs extends Component {
    state = {
        content: [],
        loaded: false
    }

    componentDidMount(){
        axios.get("/db/whyUs.json")
        .then(res => {
            console.log(res.data);
            this.setState({...this.state.content, loaded: false});
            const whyUsData = [];
            for(let i in res.data){
                whyUsData.push({...res.data[i], id: i});
            }
            this.setState({content: whyUsData});
            console.log(this.state.content);
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div className='container' style={{paddingTop: "150px"}}>
                <div className='row'>
                    <h1 className='text-center text-white mb-4 fontThree' style={{fontSize: "54px"}}>Why Choose Us ?</h1>
                    {
                        this.state.content.map(data => (
                            data.id % 2 === 0 
                            ?
                            <div key={data.id} className='col-sm-12 col-md-6 col-lg-4 my-2'>
                                <WhyUsDarker rate={data.rate} desc={data.description} />
                            </div>
                            :
                            <div key={data.id} className='col-sm-12 col-md-6 col-lg-4 my-2'>
                                <WhyUsLighter rate={data.rate} desc={data.description} />
                            </div>
                        ))
                    }
                </div>
            </div>
            
        )
    }
}
export default WhyUs;
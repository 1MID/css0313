import React from 'react'; 
import './Reset.css';
import './App.css'; 

class main extends React.Component{
    constructor(props){
        super(props) 

        this.state = {
            showBMI: false,
            heightValue:'',
            weightValue:'' ,
            bmiValue:0
        };

        this.handleShowBMI = this.handleShowBMI.bind(this);
        this.handleCloseBMI = this.handleCloseBMI.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleCal = this.handleCal.bind(this);
    }
    
    handleShowBMI(){ 
        this.setState({ showBMI:true }) 
    }
    handleCloseBMI(){ 
        this.setState({ showBMI:false }) 
    }

    handleHeightChange(event) {
        this.setState({heightValue: event.target.value});
    }

    handleWeightChange(event) {
        this.setState({weightValue: event.target.value});
    }

    handleCal(){
        
        var  bmi = parseInt(this.state.weightValue, 10) / ( ( parseInt(this.state.heightValue, 10) /100) *   (parseInt(this.state.heightValue, 10) / 100))
 
        this.setState({
            bmiValue: bmi.toFixed(2)
        })  
    }

    render(){
        return (    
            <div class="banner">
                <div class="container">
                    <div class="banner-txt">
                        <h1>
                            Fitness partner
                            <small> 
                              let me help you to calculate it!
                            </small>
                        </h1>
   
                        <button class = "button" type="button" onClick={this.handleShowBMI} >BMI</button>
                        <button class = "button" type="button">TDEE</button>


                        { this.state.showBMI ?    
                            <div class="wrapper">
                                <div class="title">
                                <h1>BMI</h1>
                                </div>
                                <div class="contact-form">
                                <div class="input-fields"> 
                                    <p class="input-p">Height(cm)</p>
                                    <input type="text" class="input" value={this.state.heightValue} onChange={this.handleHeightChange}/>
                                    <p class="input-p">Weight(kg)</p>
                                    <input type="text" class="input"   value={this.state.weightValue} onChange={this.handleWeightChange}/> 
                                    <div class="btn_cancel"  onClick={this.handleCloseBMI}>cancel</div>
                                    <div class="btn_cal" onClick={this.handleCal}>Calculation</div>
                                </div>
                                <div class="msg">
                                   <p class="input-p">Result</p>
                                    {/* <textarea placeholder="Result"></textarea> */} 
                                    {this.state.bmiValue != 0 ? <h1 class = "input-h1"> {this.state.bmiValue}  </h1> : null}
                                </div>
                                </div>
                            </div> 
                        : null }


                        {/* <h2>圖文滿版區塊 </h2>
                        <p>也格炸彈超爽口感也格炸彈超爽口感也格炸彈超爽口感</p> */}
                    </div>
                </div>
   
            </div>  
         );
    }
} 

export default main
import './Reset.css';
import './App.css'; 
 

function App() {

 

  return (    
          <div class="banner">
              <div class="container">
                  <div class="banner-txt">
                      <h1>
                          Fitness partner
                          <small> 
                            健身計算機
                          </small>
                      </h1>
 
                      <button class = "button" type="button" onClick={console.log('gg')} >BMI</button>
                      <button class = "button" type="button">TDEE</button>

 


                      {/* <h2>圖文滿版區塊 </h2>
                      <p>也格炸彈超爽口感也格炸彈超爽口感也格炸彈超爽口感</p> */}
                  </div>
              </div>
 
          </div> 

          
      
  );
}

export default App;

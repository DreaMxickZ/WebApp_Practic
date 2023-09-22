// import logo from './logo.svg';
import './App.css';
import React, { Component  } from 'react';

class App extends Component {
  
  render() {
    
    const menu1 ={
      foodtype: "อาหารคาว",
      menu: "ข้าวผัด",
      detail:"ข้าวผัด เป็นอาหารไทยประเภทข้าวผัด เป็นการนำข้าวสวยลงไปผัดคลุกกับซอส น้ำพริก หรือเครื่องปรุงรสต่าง ๆ เพื่อให้ได้รสชาติ เช่น ซอสมะเขือเทศ, ซอสพริก, ซีอิ๊วดำ, ซอสถั่วเหลือง หรือน้ำพริกชนิดต่าง ๆ และมีการใส่เนื้อสัตว์ชนิดต่าง ๆ ลงไป เช่น หมู, ไก่, ปลาหมึก, ปู, กุ้ง หรือมันกุ้ง แหนม เป็นต้น  โดยเรียกชื่อข้าวผัดชนิดนั้น ๆ ตามชื่อเนื้อสัตว์ที่ใส่ลงไป ",
      imagelocate: "https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg"
    }

    const menu2 ={
      foodtype: "อาหารหวาน",
      menu: "บัวลอย",
      detail:"บัวลอยชาววัง อีกหนึ่งเมนูขนมไทยโบราณที่อยู่คู่กับคนไทยมาอย่างยาวนาน ไม่ว่าจะเทศกาลไหน บัวลอยจะเป็นอีกหนึ่งเมนูที่อยู่ในสำรับอาหารเสมอ ไม่ว่าจะเป็นการทำบุญเลี้ยงพระ งานมงคล และงานพิธีการต่าง ๆ  ด้วยความที่บัวลอยนั้นใช้วัตถุดิบในการทำที่ง่าย แต่ต้องใช้พิถีพิถันในเรื่องรสชาติ สีสัน ความสวยงาม กลิ่นหอม ",
      imagelocate: "https://img.kapook.com/u/2022/wanwanat/1079595941.jpg"
    }

    return (
      <>
      <style>
      {`
     .main-content {
      background-color: #6A6968;
      display: flex;
      flex-direction: column;
      align-items: center; 
      width: 100%;
      height: 100vh; 
    }
    .Title-text {
      margin-top: 10px;
    }
     h1 {
      color:#F4C919 ;
    }
    
    .box-food {
      width: 800px;
      height: 335px;
      background-color: bisque;
      border-radius: 15px;
      border: 3px solid #000000;
    }
    
    .box-content {
      margin-top: 20px;
      margin-left: 18px;
      margin-right: 35px;
      
      
    }
    
    .box-content .content {
      display: grid;
      grid-template-columns: 1fr 0.5fr ;
    }
    
    
    .content .detail {
      text-align: start;
    }
    
    .btn-main {
      display: flex; 
      justify-content: center; 
      position: relative; 
    }
    
    .button-btn {
      display: flex;
      justify-content: center;  
    }
    
    .btn-vote {
      height: 40px;
      margin-top: 15px;
    }
    
    .add{
      margin-right: 30px;
      margin-left: 40px;
    }
    
    .dis {
      margin-left: 90px;
    }
    
    .score {
      order: 2;
      margin-left: 10px;
      margin-right: 10px;
      background-color:#79E307 ;
      color: #8B41E1;
      border: 2px solid #8B41E1;
      height: 50px;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 10px;
      font-size: 22px;
      font-weight: bold;
      display: flex; 
      justify-content: center; 
      align-items: center; 
      position: absolute;
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%); 
      
    }
      `}
      </style>
      <div className="App">
         <div className="main-content">
           <h1>โหวตอาหาร</h1>
             <Boxfood foodtype={menu1.foodtype} menu={menu1.menu} detail={menu1.detail} imagelocate={menu1.imagelocate} />
             <Boxfood foodtype={menu2.foodtype} menu={menu2.menu} detail={menu2.detail} imagelocate={menu2.imagelocate} />
         </div>
       </div>
    </>
    
    );
  }
}

class Boxfood extends Component { 
  state = {
    result: "MIN"
    ,
  }
  handleCallback = (childData) =>{
    this.setState({result: childData})
  }
  render() {
    const {foodtype, menu, detail, imagelocate} = this.props;
    const {result} = this.state;

   
    return (
      <div className="box-food">
                  <div className="box-content">
                    <div className="content">
                      <div className="detail">
                        <h2>{foodtype}</h2>
                        <h4>{menu}</h4>
                        <p>{detail}</p>
                      </div>
                      <div className="picture">
                        <img src={imagelocate} alt="{menu}" width="280" height="200"></img>
                      </div>
                    </div>
                    

                    <div className="btn-main">
                      <Score ScoreCallback = {this.handleCallback}/>
                      <div class="score">{result}</div>
                    </div>
                  

                  
                  </div> 
              </div>
    );
  }
}




class Score extends Component {
  state = {
    count: 0,
  }


  Addvote = () => {  
    if (this.state.count >= 10) {
      alert('Cannot vote more');
    } else {
      const newCount = this.state.count + 1;
      this.setState({ count: newCount });
      this.props.ScoreCallback(newCount === 10 ? 'MAX' : newCount);
    }
  }

  Disvote = () => {
    if (this.state.count <= 0) {
      alert('Cannot Unvote');
    } else {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount });
      this.props.ScoreCallback(newCount === 0 ? 'MIN' : newCount);
    }
  }

  


  render() {
    
    return (
      <div className="">
      <button onClick={this.Addvote} className="btn-vote add" style={this.buttonStyleadd}>click to vote</button>
      <button onClick={this.Disvote} className="btn-vote dis" style={this.buttonStyledis}>click to unvote</button>
    </div>
    );
  }
}



export default App;



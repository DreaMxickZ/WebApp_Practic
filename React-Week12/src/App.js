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
      <div className="App">
        <div className="main-content">
          <h1>โหวตอาหาร</h1>
            <Boxfood foodtype={menu1.foodtype} menu={menu1.menu} detail={menu1.detail} imagelocate={menu1.imagelocate} />
            <Boxfood foodtype={menu2.foodtype} menu={menu2.menu} detail={menu2.detail} imagelocate={menu2.imagelocate} />

        </div>
        
        
      </div>
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
      <div className="button-btn">
      <button onClick={this.Addvote} className="btn-vote add">click  to vote</button>
      <button onClick={this.Disvote} className="btn-vote dis">click  to unvote</button>
      </div>
      

    );

  }
}

export default App;


  // <button onClick={this.Addvote} className="btn-vote">Click Me</button>
      // <button onClick={this.Disvote} className="btn-vote dis">Click Me</button>
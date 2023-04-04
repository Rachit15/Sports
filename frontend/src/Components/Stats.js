
import {React,useState,useEffect,useRef} from 'react';

import Chart from 'chart.js/auto';
import './Stats.css';

const Stats = () => {
  const [pieData, setPieData] = useState({});
  const [chesspieData, setchessPieData] = useState({});
  const [carrompieData, setcarromPieData] = useState({});
  const [swimmingpieData, setswimmingPieData] = useState({});
  const [tennispieData, settennisPieData] = useState({});
  const chartRef = useRef(null);
  const chesschartRef = useRef(null);
  const carromchartRef = useRef(null);
  const swimmingchartRef = useRef(null);
  const tennischartRef = useRef(null);
  
  useEffect(()=>{
    getParticipants();
    getChessParticipants();
    getCarromParticipants();
    getSwimmingParticipants();
    getTennisParticipants();
     },[]);
     console.log('piedata',pieData)
     console.log(pieData.labels);
     
     const getParticipants=async()=>{
      let  result=await fetch("http://localhost:8080/viewstats",{
        method:'post',
        body:JSON.stringify(),
        headers:{
            'Content-Type':'application/json'
        }
  
    });
    let data=await result.json();

    //  if(result.status===422)
    //  {
    //    message.error(data.message);
    //  }
  
    
    console.log(data);
     let departments = Object.keys(data);
    let  counts = Object.values(data);
    let formattedData = {
     
      datasets: [
        {
          
          data: counts,
          backgroundColor: [
            'black',
            'yellow',
            'orange',
            'magenta',
            'blue',
            'indigo'
          ],
            label: 'Participants by departments',
        }
      ],
       labels: departments,
    };
   
    
    console.log('formatted data',formattedData);
    setPieData(formattedData);
    
    }
    const getChessParticipants=async()=>{
      let  result=await fetch("http://localhost:8080/viewstats/chess",{
        method:'post',
        body:JSON.stringify(),
        headers:{
            'Content-Type':'application/json'
        }
  
    });
    let data=await result.json();

    //  if(result.status===422)
    //  {
    //    message.error(data.message);
    //  }
  
    
    console.log(data);
     let departments = Object.keys(data);
    let  counts = Object.values(data);
    let formattedData = {
     
      datasets: [
        {
          
          data: counts,
          backgroundColor: [
            'black',
            'yellow',
            'orange',
            'magenta',
            'blue',
            'indigo'
          ],
            label: 'Participants by departments',
        }
      ],
       labels: departments,
    };
   
    
    console.log('formatted data',formattedData);
    setchessPieData(formattedData);
    
    }
    const getCarromParticipants=async()=>{
      let  result=await fetch("http://localhost:8080/viewstats/carrom",{
        method:'post',
        body:JSON.stringify(),
        headers:{
            'Content-Type':'application/json'
        }
  
    });
    let data=await result.json();

    //  if(result.status===422)
    //  {
    //    message.error(data.message);
    //  }
  
    
    console.log(data);
     let departments = Object.keys(data);
    let  counts = Object.values(data);
    let formattedData = {
     
      datasets: [
        {
          
          data: counts,
          backgroundColor: [
            'black',
            'yellow',
            'orange',
            'magenta',
            'blue',
            'indigo'
          ],
            label: 'Participants by departments',
        }
      ],
       labels: departments,
    };
   
    
    console.log('formatted data',formattedData);
    setcarromPieData(formattedData);
    
    }
    const getSwimmingParticipants=async()=>{
      let  result=await fetch("http://localhost:8080/viewstats/swimming",{
        method:'post',
        body:JSON.stringify(),
        headers:{
            'Content-Type':'application/json'
        }
  
    });
    let data=await result.json();

    //  if(result.status===422)
    //  {
    //    message.error(data.message);
    //  }
  
    
    console.log(data);
     let departments = Object.keys(data);
    let  counts = Object.values(data);
    let formattedData = {
     
      datasets: [
        {
          
          data: counts,
          backgroundColor: [
            'black',
            'yellow',
            'orange',
            'magenta',
            'blue',
            'indigo'
          ],
            label: 'Participants by departments',
        }
      ],
       labels: departments,
    };
   
    
    console.log('formatted data',formattedData);
    setswimmingPieData(formattedData);
    
    }
    const getTennisParticipants=async()=>{
      let  result=await fetch("http://localhost:8080/viewstats/tennis",{
        method:'post',
        body:JSON.stringify(),
        headers:{
            'Content-Type':'application/json'
        }
  
    });
    let data=await result.json();

    //  if(result.status===422)
    //  {
    //    message.error(data.message);
    //  }
  
    console.log("Printing Tennis Data")
    console.log(data);
     let departments = Object.keys(data);
    let  counts = Object.values(data);
    let formattedData = {
     
      datasets: [
        {
          
          data: counts,
          backgroundColor: [
            'black',
            'yellow',
            'orange',
            'magenta',
            'blue',
            'indigo'
          ],
            label: 'Participants by departments',
        }
      ],
       labels: departments,
    };
   
    
    console.log('formatted data',formattedData);
    settennisPieData(formattedData);
    
    }
    useEffect(() => {
      const options = {
        plugins: {
          legend: {
            labels: {
              color: 'white',
              boxWidth: 50,
              font:{
                size:30
              }
            },
          },
        },
      };
      
      console.log('options', options);
      
      const chart = new Chart(chartRef.current, {
        type: 'pie',
        data: pieData,
        options: options,
      });
    
      return () => {
        chart.destroy();
      };
     
    }, [pieData]);
    useEffect(() => {
      const options = {
        plugins: {
          legend: {
            labels: {
              color: 'white',
              boxWidth: 50,
              font:{
                size:30
              }
            },
          },
        },
      };
      
      console.log('options', options);
      
      const chart = new Chart(chesschartRef.current, {
        type: 'pie',
        data: chesspieData,
        options: options,
      });
    
      return () => {
        chart.destroy();
      };
     
    }, [chesspieData]);
    useEffect(() => {
      const options = {
        plugins: {
          legend: {
            labels: {
              color: 'white',
              boxWidth: 50,
              font:{
                size:30
              }
            },
          },
        },
      };
      
      console.log('options', options);
      
      const chart = new Chart(carromchartRef.current, {
        type: 'pie',
        data: carrompieData,
        options: options,
      });
    
      return () => {
        chart.destroy();
      };
     
    }, [carrompieData]);
    useEffect(() => {
      const options = {
        plugins: {
          legend: {
            labels: {
              color: 'white',
              boxWidth: 50,
              font:{
                size:30
              }
            },
          },
        },
      };
      
      console.log('options', options);
      
      const chart = new Chart(swimmingchartRef.current, {
        type: 'pie',
        data: swimmingpieData,
        options: options,
      });
    
      return () => {
        chart.destroy();
      };
     
    }, [swimmingpieData]);
    useEffect(() => {
      const options = {
        plugins: {
          legend: {
            labels: {
              color: 'white',
              boxWidth: 50,
              font:{
                size:30
              }
            },
          },
        },
      };
      
      console.log('options', options);
      
      const chart = new Chart(tennischartRef.current, {
        type: 'pie',
        data: tennispieData,
        options: options,
      });
    
      return () => {
        chart.destroy();
      };
     
    }, [tennispieData]);
  
    
  
  
   
  return (
    <>
    <div className="chart-container">
    <div className='rachit'>
  <canvas  ref={chartRef}  />
  <h1 style={{color:'white',textAlign:'center',marginTop:10}}>Badminton Particicpants</h1>
  </div>
  <div className='rachit'>
  <canvas  ref={chesschartRef}  />
  <h1 style={{color:'white',textAlign:'center',marginTop:10}}>Chess Particicpants</h1>
  </div>
  <div className='rachit'>
  <canvas  ref={carromchartRef}  />
  <h1 style={{color:'white',textAlign:'center',marginTop:10}}>Carrom Particicpants</h1>
  </div>
  
  <div className='rachit'>
  <canvas  ref={swimmingchartRef}  />
  <h1 style={{color:'white',textAlign:'center',marginTop:10}}>Swimming Particicpants</h1>
  </div>
  <div className='rachit'>
  <canvas  ref={tennischartRef}  />
  <h1 style={{color:'white',textAlign:'center',marginTop:10}}>Tennis Particicpants</h1>
  </div>
  
  {/* <canvas ref={chesschartRef} />
  <canvas ref={carromchartRef} />
  <canvas ref={swimmingchartRef} />
  <canvas ref={tennischartRef} /> */}
</div>
    {/* <div class="container">
    <div style={{ width: '400px', height: '400px',marginLeft:'40%',marginTop:'5%' }}>
      <canvas ref={chartRef}></canvas>
      
    </div>
    <h6 style={{color:'white' ,width:'70%', marginLeft:'40%'}}>Badminton Particicpants according to departments</h6>
    <div style={{ width: '400px', height: '400px',marginLeft:'40%' }}>
      <canvas ref={chesschartRef}></canvas>
      
    </div>
    <h6 style={{color:'white' ,width:'70%', marginLeft:'30%'}}>Chess Particicpants according to departments</h6>
    <div style={{ width: '400px', height: '400px',marginLeft:'40%' }}>
      <canvas ref={carromchartRef}></canvas>
      
    </div>
    <h6 style={{color:'white' ,width:'70%', marginLeft:'30%'}}>Carrom Particicpants according to departments</h6>
    <div style={{ width: '400px', height: '400px',marginLeft:'40%' }}>
      <canvas ref={swimmingchartRef}></canvas>
      
    </div>
    <h6 style={{color:'white' ,width:'70%', marginLeft:'30%'}}>Swimming Particicpants according to departments</h6>
    <div style={{ width: '400px', height: '400px',marginLeft:'40%' }}>
      <canvas ref={tennischartRef}></canvas>
      
    </div>
    <h6 style={{color:'white' ,width:'70%', marginLeft:'30%'}}>Tennis Particicpants according to departments</h6>
    </div> */}
    </>
  )
}

export default Stats;

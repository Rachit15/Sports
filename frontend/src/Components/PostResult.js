import {React,useState,useEffect} from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
  message
} from 'antd';
const { Option } = Select;

const PostResult = () => {
  console.log("Hi");
  const [sport,setSport]=useState('');
    const [selectedTournament, setSelectedTournament] = useState('');
    const [selectedWinner, setSelectedWinner] = useState('');
    const [selectedRunner1, setSelectedRunner1] = useState('');
    const [selectedRunner2, setSelectedRunner2] = useState('');
    const[games,setGames]=useState([]);
    const [participant,setParticipant]=useState([]);
  useEffect(()=>{
 getGames();
 getParticipant();
 
  },[]);
  const uniqueParticipant = participant.filter((game, index, self) =>
  index === self.findIndex((g) => g.Name === game.Name )
);
console.log(uniqueParticipant);
  console.log(games);
  console.log(participant);
  const getGames=async()=>{
    console.log("Hi in getGames")
    let  result=await fetch("http://localhost:8080/posttournamentname",{
      method:'post',
      body:JSON.stringify(),
      headers:{
          'Content-Type':'application/json'
      }

  });
  let data=await result.json();
   console.log(data);
  if(result.status===422)
  {
    message.error(data.message);
  }
  else{
    console.log("In function")
  setGames(data);
  console.log("After function");

  }
  
  }
  const getParticipant=async()=>{
    console.log("Hi in Participant")
    let  result=await fetch("http://localhost:8080/postparticipant",{
      method:'post',
      body:JSON.stringify(),
      headers:{
          'Content-Type':'application/json'
      }

  });
  let data=await result.json();
   console.log(data);
  if(result.status===422)
  {
    message.error(data.message);
  }
  else{
    console.log("In function of Participant")
  setParticipant(data);
  console.log("After function of participant");

  }
  
  }
    const handleTournamentChange = (value) => {
        console.log("hi in handleTournament")
        setSelectedTournament(value);
      }
    
      const handleWinnerChange = (value) => {
        setSelectedWinner(value);
      }
    
      const handleRunner1Change = (value) => {
        setSelectedRunner1(value);
      }
    
      const handleRunner2Change = (value) => {
        setSelectedRunner2(value);
        
      }
      const handleSubmit = async () => {
        console.log("Hi in handleSubmit")
        console.log('Sport',sport);
        console.log('Tournament Name:', selectedTournament);
        console.log('Winner:', selectedWinner);
        console.log('Runner Up 1:', selectedRunner1);
        console.log('Runner Up 2:', selectedRunner2);
        const  result=await fetch("http://localhost:8080/result",{
                method:'post',
                body:JSON.stringify({sport,selectedTournament,selectedWinner,selectedRunner1,selectedRunner2}),
                headers:{
                    'Content-Type':'application/json'
                }
    
            });
            let data=await result.json();
            console.log(data);
        if(result.status===422)
        message.error(data.message);
        else if(result.status===400)
        message.error(data.message);
        else
        {
          window.location='/adminpanel';
        }
             
    console.log("In final Submit")
        
      };
      
  return (
    <>
    <Form.Item style={{paddingTop:"50px"}}
     
     name="Sport"
     label={<span style={{ color: 'orange',fontSize:'26px' }}>Sport
     </span>}
     
     
   >
        <Select placeholder="Please select a winner" style={{ width: 150 }} onChange={(value) => setSport(value)}>
       
         
           
             <Option value="Badminton">Badminton</Option>
             <Option value="Chess">Chess</Option>
             <Option value="Carrom">Carrom</Option>
             <Option value="Swimming">Swimming</Option>
             <Option value="Tennis">Tennis</Option>
         
           
         
       
     
         
       </Select>
     
   </Form.Item> 
    <Form.Item 
     
      name="Tournament Name"
      label={<span style={{ color: 'orange',fontSize:'26px' }}>Tournament Name
      </span>}
      
      
    >
         <Select placeholder="Please select a winner" style={{ width: 150 }} onChange={(value) => setSelectedTournament(value)}>
         {
        games.map((val,idx) => {
          return(
            <>
              <Option value={val.tournamentname}>{val.tournamentname}</Option>
          
            </>
          )
        })
      }
          
        </Select>
      
    </Form.Item> 
    
    <Form.Item
      name="winner"
      label={<span style={{ color: 'orange',fontSize:'26px' }}>winner</span>}
     
    >
       <Select placeholder="Please select a winner" style={{ width: 150 }} onChange={(value) => setSelectedWinner(value)}>
       {
        uniqueParticipant.map((val,idx) => {
          return(
            <>
              <Option value={val.Name}>{val.Name}</Option>
          
            </>
          )
        })
      }
          {/* <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option> */}
        </Select>
    </Form.Item> 
    <Form.Item
      name="runner1"
      label={<span style={{ color: 'orange',fontSize:'26px' }}>Runner Up1</span>}
     
      
    >
       <Select placeholder="Please select a winner" style={{ width: 150 }}  onChange={(value) => setSelectedRunner1(value)}>
       {
        uniqueParticipant.map((val,idx) => {
          return(
            <>
              <Option value={val.Name}>{val.Name}</Option>
          
            </>
          )
        })
      }
          {/* <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option> */}
        </Select>
    </Form.Item> 
    <Form.Item
      name="runner2"
      label={<span style={{ color: 'orange',fontSize:'26px' }}>Runner Up2</span>}
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Please select your country!',
        },
      ]}
      
    >
       <Select placeholder="Please select a winner" style={{ width: 150 }} onChange={(value) => setSelectedRunner2(value)}>
       {
        uniqueParticipant.map((val,idx) => {
          return(
            <>
              <Option value={val.Name}>{val.Name}</Option>
          
            </>
          )
        })
      }
          {/* <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option> */}
        </Select>
    </Form.Item> 
    <Button type="primary" htmlType="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  )
}

export default PostResult;

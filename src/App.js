import React,{useState} from 'react';
import './App.css';

const StudentGrade=()=>{
  const[tam,setTam]=useState("");
  const[eng,setEng]=useState("");
  const[mat,setMat]=useState("");
  const[sci,setSci]=useState("");
  const[soc,setSoc]=useState("");
  const[result,setResult]=useState("");

  const calc=()=>{
    const totalGrade=parseFloat(tam)+parseFloat(eng)+parseFloat(mat)+parseFloat(sci)+parseFloat(soc);
    const percent=(totalGrade/500)*100;
    let grade="";
    if(percent<=100 && percent>=80){
      grade='A';
    }
    else if(percent<=79 && percent>=60)
    {
      grade='B';
    }
    else if(percent<=59 && percent>=40)
    {
      grade='C';
    }
    else{
      grade='F';
    }
    if(percent>=39){
     setResult(`Total marks out of 500:${totalGrade}<br/>Percentage:${percent}<br/>Grade:${grade}(You Are Pass)`);
    }
    else{
    setResult(`Total marks out of 500:${totalGrade}<br/>Percentage:${percent}<br/>Grade:${grade}(You Are Fail)`);
    }  
    
  }


return(
  <div className="background">
    <div className="container">
      <div className="screen">
        <div className="screen-body">
          <div className="title">
            <div>Student Grade Calculator</div>
            </div>
            <div className='form-body'>
              <div className='app-form'>
                <div className='inputs'>
                  <input type='text' placeholder="Tamil" value={tam} onChange={(e)=>setTam(e.target.value)}/>
                </div>
                <div className='inputs'>
                  <input type='text' placeholder="English" value={eng} onChange={(e)=>setEng(e.target.value)}/>
                </div>
                <div className='inputs'>
                  <input type='text' placeholder="Maths" value={mat} onChange={(e)=>setMat(e.target.value)}/>
                </div>
                <div className='inputs'>
                  <input type='text' placeholder="Science" value={sci} onChange={(e)=>setSci(e.target.value)}/>
                </div>
                <div className='inputs'>
                  <input type='text' placeholder="Social" value={soc} onChange={(e)=>setSoc(e.target.value)}/>
                </div>
                <div className='form-btn'>
                  <button className='btn' onClick={calc}>
                    <span>Calculate Percentage</span>
                  </button>
                </div>
            </div>
          </div>
          <div className='result'>
            <p dangerouslySetInnerHTML={{__html:result}}></p>
          </div>
        </div>
      </div>
    </div>

  </div>
);
};
export default StudentGrade;
import React, { useState } from 'react'

const Main = () => {
    const [input ,setinput]=useState([]);
    const calculatorresult=(input)=>{

      try{
           const opretors=['+','-','*','/'];
           let oprator=null;
           for(let i=0;i<input.length; i++){
            if(opretors.includes(input[i])){
             oprator= input[i];
             break;
            }
           };
           const[operand1,operand2]=input.split(oprator).map(parseFloat);
           let result;
           switch(oprator){
            case '+':result=operand1+operand2;
            break;
            case '-':
              result=operand1-operand2;
              break;
              case '*':
                result=operand1*operand2;
                break;
                case '/':
                  result =operand1/operand2;
                  default:
                  throw new Error('invalid operator');
                 
           }
           setinput(result.toString());
          
      }
      
      catch(Error){
        setinput(Error)
      }
    }
    const handle=(value)=>{
      if(value==='c'){
        setinput('')
      }
      else if(value==='<'){
        setinput(input.slice(0,-1))
      }
      else if(value==='='){
       calculatorresult(input);
      }
     else{
      setinput((preValue) =>preValue +value)
     }
    }
  return (
    <div>
      <div className="App">
      <div className='container'>
        <div className='cal'>
        <h1 id='input'>{input}</h1>
        <div>
            <button onClick={()=> handle('c')}>c</button>
            <button onClick={()=>handle('<')}>&lt;</button>
            <button onClick={()=> handle('%')}>%</button>
            <button onClick={()=> handle('/')}>/</button>
        </div>
        <div>
            <button onClick={()=> handle('7')}>7</button>
            <button onClick={()=> handle('8')}>8</button>
            <button onClick={()=> handle('9')}>9</button>
            <button onClick={()=> handle('+')}>+</button>
        </div>
        <div>
            <button onClick={()=> handle('4')}>4</button>
            <button onClick={()=> handle('5')}>5</button>
            <button onClick={()=> handle('6')}>6</button>
            <button onClick={()=> handle('-')}>-</button>
        </div>
        <div>
            <button onClick={()=> handle('3')}>3</button>
            <button onClick={()=> handle('2')}>2</button>
            <button onClick={()=> handle('1')}>1</button>
            <button onClick={()=> handle('*')}>*</button>
        </div>
        <div>
            <button onClick={()=> handle('0')}>0</button>
            <button onClick={()=> handle('00')}>00</button>
            <button onClick={()=> handle('.')}>.</button>
            <button onClick={()=> handle('=')}>=</button>
        </div>
        </div>
        
      </div>
    </div>
   </div>
  )
}

export default Main

import React from 'react'
import { useState ,useEffect , useReducer } from 'react'


const data = [];



const reducer = (state , action) =>{

    switch (action.type){
        case "COMPLETE":
            return state.map( (todo) => {
                if(action.id === todo.id){
                    return {...todo , c:!todo.c} ;
                }else{
                    return todo;
                }
            }) ;
            
            break;
        
        case "ADD":
            return [...state , action.obj];   
            break; 

        case "DEL":
            console.log(" bhere we delete");
            return state.filter(t => t.id !== action.id)
    
        default:
            return state;
            break;
    }
}


const Todo = () => {
    const [todo, despatch] = useReducer( reducer , data);
    const [txt, setTxt] = useState("");
    const [counter, setcounter] = useState(0);

    const addt = () =>  {
       // const c = counter + 1 
        //console.log(c)
        setcounter(counter + 1);
        console.log('cheking counter...',counter);
        despatch({type:"ADD" , obj:{id:counter + 1 , todo:txt ,c:false}});
        setTxt('')
        //despatch({type:"ADD" , obj:{id:6 ,todo:"sky dive" ,c:false}});
    }


    const check = (todo) =>{
        despatch({type:"COMPLETE" , id:todo.id});
    }

    const del = (todo) =>{
        console.log(" bhere we delete 11111");
        despatch({type:"DEL" , id:todo.id});
    }

    const honChange = (e) => {
        e.preventDefault();
        setTxt(e.target.value);
       
    } 

   

  return (
    <div className='w-full mt-2 flex flex-col justify-center items-center'>

     
      <h1 className=' mb-8 text-center text-3xl font-bold text-blue-500 my-5 uppercase underline'> Todo Task Application</h1>

      <div className='max-w-[500] '>
        <div className='w-full mb-8 flex  border border-spacing-2 border-slate-500 mx-2'>
            <label className='text-2xl font-bold  text-white p-3 bg-blue-500'>{todo.length}</label>
            <label className='text-lg '>
                <input className=' p-3  text-blue-500 ' type='text' value={txt} onChange={honChange} placeholder='add task'/>
            </label>
            <button onClick={()=>{addt()}} className=' w-full  text-white p-3.5 bg-blue-500 border border-spacing-3 border-blue-500 '> ADD TODO</button>
        </div>
       {
         
        todo.map( (to ) => (
            <div key={to.id}  className= { `space-x-12 w-full ${ to.c ? 'bg-blue-200' : 'bg-slate-200' } p-6 m-2 justify-between shadow-md flex border border-spacing-2 border-slate-500 `}>
            <div className={ `${ to.c ? 'text-red-600' : 'text-green-600' } flex items-center justify-between `}> 
                <h1 className='p-1 w-8 h-8 flex justify-center items-center  rounded-full bg-blue-500 text-white border border-white text-xl font-bold'>{to.id}</h1>
                {<h1 className='ml-2 text-2xl font-bold text-slate-700  text-left '>{to.todo}</h1> }
            </div>
            <div>
                <label className='text-lg mr-2'>
                    <button type="button" className={ ` p-3 ${ to.c ? 'bg-orange-500' : 'bg-blue-500'} text-white rounded-lg`}  value={to.c} onClick={()=>{check(to) }}> CHECK </button>             
                </label>
                <label className='text-lg ml-2'>
                    <button className='p-3 bg-blue-500 text-white rounded-lg' type='button' value={to.edit} onClick={()=>{del(to) }}> DELET </button>
                </label>
                
            </div>
            </div> 

        ))
        }
        
      </div>

    </div>
  )
}

export default Todo
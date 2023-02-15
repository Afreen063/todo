
import { useState } from 'react';
import './todolist.css'
export default function TodoList(prop)
{
  
  const [ischecked, setIsChecked]=useState(new Array((prop.list).length).fill(false))
  function handleDelete(id)
  {
      const newList= (prop.list).filter((i)=>{
        return i.toString()!==id;
      })
       prop.setList(newList)
  }
  function handledone(position)
  {
    const checked=ischecked.map((item,index)=>{
     return index===position? !item: item
    })
    setIsChecked(checked);
   
  }

    return (
        <div>
           {(prop.list).map((i,index)=>{
            return <div >
                 <ol>
                    <li className="listitem" key={i.toString()}>
              
                   <div>
                    <input type="checkbox" checked={ischecked[index]} onChange={()=>handledone(index)} id={`checkbox-${i.toString()}`}></input>
                   <span >{index+1 +". "}</span><span >{i}</span>
                   </div>
                <button onClick={()=>{handleDelete(i.toString())}}>Delete</button>
                    </li>
                </ol>
            </div>
           })}
        </div>
    )
}
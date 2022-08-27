import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { DataContext } from '../context/api/DataContext';
import './crud.css'
const Crud = () => {
    const[modal,setModal] = useState(false);
    const openModal = () =>{
        setUser({
            name:'',
            email:'',
            phone:'',
            id:''
        })
        
        setModal(!modal)};
    const [user,setUser] =useState({
        name:'',
        email:'',
        phone:'',
        id:''
    })
const inputChange = (e) =>{
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })
}
const [data,setData] = useState([]);
const {data1,setData1,dataYukla,search,setSearch} = useContext(DataContext)
const send = (e) =>{
    e.preventDefault();
    if(user.id===''){
        // setData1([...data1,{...user,id: new Date().getTime()}])
        localStorage.setItem('data',JSON.stringify([...data1,{...user,id: new Date().getTime()}]))
        setUser({
            name:'',
            email:'',
            phone:'',
            id:''
        })
        dataYukla()
    }else{
        let edit = [...data1.map(item=>item.id===user.id ? user : item)]
        localStorage.setItem('data',JSON.stringify(edit))
        setUser({
            name:'',
            email:'',
            phone:'',
            id:''
        })
        dataYukla()
    }
   
    openModal()
}


const deleteData = (i) =>{
    let del = data1.filter((item,index)=>index!==i);
    localStorage.setItem('data',JSON.stringify(del))
    dataYukla()
}
const editData = (item) =>{
    openModal()
    setUser({
        ...user,
        name:item.name,
        email:item.email,
        phone:item.phone,
        id:item.id
    })
}
const [dark,setDark] = useState(false);

useEffect(()=>{
if(dark){
    document.body.classList.add('active')
}else{
    document.body.classList.remove('active')
}
},[dark])

    return (
        <div>
            <button className='btn' onClick={()=>{
                setDark(!dark)
            }}>dark</button>
            <div className="flex">
                <h1>localstorage crud</h1>
                <div>
                    <input type="text" className="inputs " 
                    onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                    placeholder="search" />
                </div>
                <div>
                    <button onClick={openModal} className="btn add">ADD NEW STUDENT</button>
                </div>
            </div>
            <hr />
            <table border="1" className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Activatsiya</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                  {
                    data1.filter(item=>item.name.toLowerCase().indexOf(search)!==-1).length===0 && search!=='' ?  'Toplimadi' :   
                    data1.filter(item=>item.name.toLowerCase().indexOf(search)!==-1).length===0 && search==='' ? 
                    data1.map((item,i)=>(
                        <tr>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td className='crudDetil'>
                            <button  onClick={()=>editData(item)}> <img src="./iconcrud/pen 1.svg" alt="" /></button>
                            <button onClick={()=>deleteData(i)} > <img src="./iconcrud/trash 1.svg" alt="" /></button>
                        </td>
                    </tr>
                    )) : 
                    data1.filter(item=>item.name.toLowerCase().indexOf(search)!==-1).map((item,i)=>(
                        <tr>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td className='crudDetil'>
                            <button  onClick={()=>editData(item)}> <img src="./iconcrud/pen 1.svg" alt="" /></button>
                            <button onClick={()=>deleteData(i)} > <img src="./iconcrud/trash 1.svg" alt="" /></button>
                        </td>
                    </tr>
                    ))
                  }
                   
                </tbody>
            </table>
            <div className={modal ? "modal activ" : "modal"}>
                <div className={modal ? "modal_body activ" : "modal_body"}>
                    <h1 className="modal_name">
                     {
                        user.id==='' ? '   ADD STUDENT' : '   EDIT STUDENT'
                     }
                    </h1>
                    <form onSubmit={send} className="form">
                        <label className="label">
                            Name
                        </label>
                        <input type="text" className="input" name="name"value={user.name}  onChange={inputChange} placeholder="name" />
                        <label className="label">
                            Email
                        </label>
                        <input type="email" className="input" name="email" placeholder="email"  value={user.email}  onChange={inputChange}  />
                        <label className="label">
                            Phone
                        </label>
                        <input type="tel" value={user.phone}  onChange={inputChange}  className="input" name="phone" placeholder="phone" />

                        <button className="btn btnAdd">ADD</button>
                    </form>
                    <div className="close btn" onClick={openModal}>
                        X
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Crud
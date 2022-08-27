import React,{useContext} from 'react'
import { DataContext } from '../api/DataContext'

const Contact = () => {
    const {test,test1,data1,search} = useContext(DataContext);
    console.log(test)
    console.log(test1)
  return (
    <div>
        <h1>my name is {test.name}</h1>
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
                            <button  > <img src="./iconcrud/pen 1.svg" alt="" /></button>
                            <button > <img src="./iconcrud/trash 1.svg" alt="" /></button>
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
                            <button  > <img src="./iconcrud/pen 1.svg" alt="" /></button>
                            <button > <img src="./iconcrud/trash 1.svg" alt="" /></button>
                        </td>
                    </tr>
                    ))
                  }
                   
                </tbody>
            </table>
    </div>
  )
}

export default Contact
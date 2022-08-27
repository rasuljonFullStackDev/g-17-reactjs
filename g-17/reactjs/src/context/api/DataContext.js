import React, { useEffect, useState } from 'react'

export const DataContext = React.createContext();


export const DataContextProvider = ({ children }) => {
    const [test, setTest] = useState({
        name: 'Farrux',
        phone: 9994125
    })
    const [test1, setTest1] = useState({
        name: 'Hojakbar',
        phone: 9994125
    })
    const [search,setSearch]  = useState('');
    const [data1, setData1] = useState(JSON.parse(localStorage.getItem('data')) || [])
    const dataYukla = () => {

        if (localStorage.getItem('data')) {
            setData1(JSON.parse(localStorage.getItem('data')))
        } else {
            localStorage.setItem('data', JSON.stringify(data1));
        }
    }
    return (
        <DataContext.Provider value={{ test, test1, data1, setData1, dataYukla,search,setSearch }}>
            {children}
        </DataContext.Provider>
    )
}
import React, { useState } from 'react'

const Shop = () => {
    const [mevalar, setMevalar] = useState([
        {
            id: 0,
            name: "shaftoli",
            narxi: 15,
            count: 0,
            img: "./img/1.png",
            like: true,
            chegirma: 50
        },
        {
            id: 1,
            name: "shaftoli 1",
            narxi: 15,
            count: 0,
            img: "./img/2.png",
            like: true,
            chegirma: 15
        },
        {
            id: 2,
            name: "shaftoli 2",
            narxi: 15,
            count: 0,
            img: "./img/3.png",
            like: true,
            chegirma: 15
        },
        {
            id: 3,
            name: "shaftoli 3",
            narxi: 25,
            count: 0,
            img: "./img/4.png",
            like: true,
            chegirma: 18
        },
        {
            id: 4,
            name: "shaftoli 5",
            narxi: 25,
            count: 0,
            img: "./img/5.png",
            like: true,
            chegirma: 15
        }
    ]);
    let s = 5;

    const minus = (id) => {
        // alert(id);
        setMevalar(mevalar => mevalar.map(item => item.id === id ? { ...item, count: item.count > 0 ? item.count - 1 : 0 } : item))
    }
    const plus = (id) => {
        // alert(id);
        setMevalar(mevalar => mevalar.map(item => item.id === id ? { ...item, count: item.count + 1 } : item))
    }

    const like = (id) => {
        setMevalar(mevalar => mevalar.map(item => item.id === id ? { ...item, like: !item.like } : item))
    }
    return (
        <>
            <h1>
                Umumiy narx
                {
                    " " + (mevalar.reduce((a, b) => a + (b.count * b.narxi), 0) - mevalar.reduce((a, b) => a + ((b.narxi / 100) * b.chegirma * b.count), 0))
                }$

            </h1>
            <div className='cards'>


                {
                    mevalar.map(item => (
                        <div className="card">
                            <div className="card-header">
                                <p>{item.chegirma} %Off</p>
                                <button className="likes" onClick={() => like(item.id)}>
                                    <svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M12.7503 0.5C11.3003 0.5 9.90866 1.175 9.00033 2.24167C8.09199 1.175 6.70033 0.5 5.25033 0.5C2.68366 0.5 0.666992 2.51667 0.666992 5.08333C0.666992 8.23333 3.50033 10.8 7.79199 14.7L9.00033 15.7917L10.2087 14.6917C14.5003 10.8 17.3337 8.23333 17.3337 5.08333C17.3337 2.51667 15.317 0.5 12.7503 0.5ZM9.08366 13.4583L9.00033 13.5417L8.91699 13.4583C4.95033 9.86667 2.33366 7.49167 2.33366 5.08333C2.33366 3.41667 3.58366 2.16667 5.25033 2.16667C6.53366 2.16667 7.78366 2.99167 8.22533 4.13333H9.78366C10.217 2.99167 11.467 2.16667 12.7503 2.16667C14.417 2.16667 15.667 3.41667 15.667 5.08333C15.667 7.49167 13.0503 9.86667 9.08366 13.4583Z" fill={!item.like ? 'red' : "grey"} stroke={!item.like ? 'red' : ''} />
                                    </svg>
                                </button>
                            </div>
                            <div className="card-body">
                                <img src={item.img} alt="" />
                                <h2>{item.name}</h2>
                                <p>{(item.narxi - (item.narxi / 100 * item.chegirma))} <s>{item.narxi}</s></p>
                            </div>
                            <div className="card-footer">
                                <div className="count">
                                    <button onClick={() => minus(item.id)} className="btn btn-minus" >-</button>
                                    <p>{item.count}</p>
                                    <button onClick={() => plus(item.id)} className="btn btn-plus" >+</button>
                                </div>
                                <div>
                                    <button ><img src="img/savat.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div >
        </>
    )
}

export default Shop;
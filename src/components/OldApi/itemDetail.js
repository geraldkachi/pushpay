import React, {useEffect, useState} from 'react'
import axios from "axios"

const ItemDetail = ({match}) => {
    
    const [item , setItem] = useState([])
    
    useEffect(() => {
        fakeAPiid()
    }, [])
    
    const fakeAPiid = async () => {
        await axios(`https://jsonplaceholder.typicode.com/posts/1?${match.params.id}`)
        .then(res => setItem(res.data))
        .catch(err => console.error(err))

        // const item = await FakeAPiid.res.data()
    }
    
    return (
        <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.body}</div>
            <img src={item.body} alt=""/>
        </div>
    )
}

export default ItemDetail


// 'https://fortnite-api.theapinetwork.com/store/get' 
// https://jsonplaceholder.typicode.com/photos?${match.params.id}_limit=5

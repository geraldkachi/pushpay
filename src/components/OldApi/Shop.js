import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

const Shop = () => {
    React.useEffect(() => {
        FakeAPi()
    }, [])

    const [items , setItem] = React.useState([])


    // console.log(data)

    const FakeAPi = async () => {
        await axios("https://jsonplaceholder.typicode.com/photos?_limit=15")
        .then(res => setItem(res.data))
        .catch(err => console.error(err))
    }

    return (
        <div>
            <h3>Shop</h3>
            {items.map(item => (
                <div key={item.id}>
                        <Link to={`/shop/${item.id}`}>
                            {item.thumbnailUrl}
                        </Link>
                </div>
            ))}
        </div>
    )
}

export default Shop


    // const FakeAPi  = async () => {
    //     await fetch(`https://jsonplaceholder.typicode.com/photos${url}`)
    //     .then(res => res.json())
    //     .then(data => setItem(data))
    //     .catch(err => console.error(err))
    // }
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import ItemList from "../components/items/ItemList"
import FAB from "../components/ui/FAB"

// const DUMMY_DATA = [
//     {
//         id: 1,
//         title: 'the envy',
//         image: 'https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/laptops/envy/envy-13-17-laptop/Fast%20memory%20storage-Desktop.png',
//         description: 'a notebook that makes you envy',
//         initial_value: 12000000,
//     },
//     {
//         id: 2,
//         title: 'the envy too',
//         image: 'https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/laptops/envy/envy-13-17-laptop/Fast%20memory%20storage-Desktop.png',
//         description: 'a notebook that makes you envy',
//         initial_value: 12000000,
//     },
// ]

function AllItems() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedItems, setLoadedItems] = useState([])
    
    useEffect(() => {
        setIsLoading(true)
        fetch(
            'https://mystash-78e22-default-rtdb.asia-southeast1.firebasedatabase.app/items.json'
        ).then(response => {
        // json also return promise, so need to wait
        // console.log(response)
        return response.json();
        }).then(data => {
            const items = []
            for (const key in data) {
                const item = {
                    id: key,
                    ...data[key]
                }
                items.push(item)
            }            
            // need to wait the promise is fully consumed then show the data
            // before that we need to return the jsx showing loading condition
            setIsLoading(false)
            // console.log(data)
            // useState to save the retrieved data, but not in array
            // data is object w/ cryptic autogenerated id
            // setLoadedItems(data)
            setLoadedItems(items)
        })      
    }, [])

    if (isLoading) {
        return (
            <section>
                <p>loading</p>
            </section>
        )
    }

    return <section>
        <h1>all items in stash</h1>
        <ItemList items={loadedItems} />

        <Link to="/new-item">
            <FAB>&#10133;</FAB>
        </Link>
    </section>
}

export default AllItems;
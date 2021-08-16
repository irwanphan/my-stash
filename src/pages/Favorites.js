import { useContext, useState, useEffect } from "react";
import ItemList from "../components/items/ItemList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedItems, setLoadedItems] = useState([])
    
    useEffect(() => {
        setIsLoading(true)
        fetch(
            'https://mystash-78e22-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json'
        ).then(response => {
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
            setIsLoading(false)
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

    // const favoritesCtx = useContext(FavoritesContext)

    let content;

    // if (favoritesCtx.totalFavorites === 0) {
    if (loadedItems.length === 0) {
        content = <p>404 favorites not found, add some loves</p>
    } else {
        content = <ItemList items={loadedItems}></ItemList>
    }

    return <section>
        <h1>my favorites</h1>
        {content}
    </section>
}

export default Favorites;
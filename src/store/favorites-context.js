import { createContext, useState, useEffect } from "react";

// context argument -> initial value
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    // these functions doesn't really do anything, just help with auto completion
    addFavorite: (favoriteItem) => {},
    removeFavorite: (itemId) => {},
    itemIsFavorite: (itemId) => {}
});

export function FavoritesContextProvider(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedItems, setLoadedItems] = useState(context.favorites)
    
    const [userFavorites, setUserFavorites] = useState([])

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
            return loadedItems
        }) 
    }, [])

    if (isLoading) {
        return (
            <section>
                <p>loading</p>
            </section>
        )
    }

    function addFavoriteHandler(favoriteItem) {
        console.log(favoriteItem)
        fetch(
            'https://mystash-78e22-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json',
            {
                method: 'POST',
                body: JSON.stringify(favoriteItem),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then(setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteItem)
        }))
    }

    function removeFavoriteHandler(itemId) {
        // console.log(itemId)
        fetch(
            'https://mystash-78e22-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json',
            {
                method: 'DELETE',
                body: JSON.stringify(itemId),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then(setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(item => item.id !== itemId)
        }))
    }

    function itemIsFavoriteHandler(itemId) {
        return userFavorites.some(item => item.id === itemId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    ) 
}

export default FavoritesContext;
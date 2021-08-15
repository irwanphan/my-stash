import { createContext, useState } from "react";

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
    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoriteItem) {
        // setUserFavorites(userFavorites.concat(favoriteItem))
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteItem)
        })
    }

    function removeFavoriteHandler(itemId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(item => item.id !== itemId)
        })

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
import { useContext } from "react";
import ItemList from "../components/items/ItemList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext)

    return <section>
        <h1>my favorites</h1>
        <ItemList items={favoritesCtx.favorites}></ItemList>
    </section>
}

export default Favorites;
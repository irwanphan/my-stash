import { useContext } from "react";
import ItemList from "../components/items/ItemList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext)

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>404 favorites not found, add some loves</p>
    } else {
        content = <ItemList items={favoritesCtx.favorites}></ItemList>
    }

    return <section>
        <h1>my favorites</h1>
        {content}
    </section>
}

export default Favorites;
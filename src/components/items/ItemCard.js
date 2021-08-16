import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";

function ItemCard(props) {
    const favoritesCtx = useContext(FavoritesContext)
    
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)
    
    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id)
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                initial_value: props.initial_value,
            })
        }
    }

    return (
        <Card key={props.id}>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h3>{props.title}</h3>
                <small>{props.initial_value}</small>
                <p>{props.description}</p>
            </div>
            <div>
                <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'remove from favorites' : 'add to favorites'}
                </button>
            </div>
        </Card>
    );
}

export default ItemCard;
import Card from "../ui/Card";

function ItemCard(props) {
    return (
        <Card key={props.key}>
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            <div>
                <h3>{props.title}</h3>
                <small>{props.initial_value}</small>
                <p>{props.description}</p>
            </div>
            <div>
                <button>add to favorites</button>
            </div>
        </Card>
    );
}

export default ItemCard;
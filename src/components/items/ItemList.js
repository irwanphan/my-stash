import ItemCard from "./ItemCard";

function ItemList(props) {
    return (
        <div>
            {props.items.map((item) => (
                <ItemCard 
                    key={item.id} 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    initial_value={item.initial_value}
                />
            ))}
        </div>
    );
}

export default ItemList;
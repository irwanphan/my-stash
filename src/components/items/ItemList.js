import ItemDetail from "./ItemDetail";

function ItemList(props) {
    return (
        <div>
            {props.data.map((item) => (
                <ItemDetail 
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
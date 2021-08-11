function ItemList(props) {
    return <section>
        {props.data.map((item) => {
            return <div className="card" key={item.id}>
                <div>{item.title}</div>
                <small>{item.initial_value}</small>
            </div>
        })}
    </section>
}

export default ItemList;
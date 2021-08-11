function ItemDetail(props) {
    return (
        <article className="card" key={props.key}>
            {console.log(props.key)}
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
        </article>
    );
}

export default ItemDetail;
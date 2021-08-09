function Item(props) {
	const deleteHandler = () => {
		console.log(props.title + " released!")
	}

	return (
		<div className='card'>
			<h3>{props.title}</h3>
			<div className="action">
				<button onClick={deleteHandler}>release</button>
			</div>
		</div>
	);
}

export default Item;
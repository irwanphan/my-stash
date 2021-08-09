import { useState } from "react";
import Modal from "./Modal";

function Item(props) {
	// initial state is false, because modal should not be open
	// useState always return array with 2 elements
	// 1st element = state snapshot / current value
	// 2nd element = function to change its value
	const [ modalIsOpen, setModalIsOpen ] = useState(false);

	const deleteHandler = () => {
		setModalIsOpen(true);
	}
	const closeModalHandler = () => {
		setModalIsOpen(false);
	}

	return (
		<div className='card'>
			<h3>{props.title}</h3>
			<div className="action">
				<button onClick={deleteHandler}>release</button>
			</div>
			{/* { modalIsOpen ? <Modal /> : null } */}
			{ modalIsOpen && <Modal onCancel={closeModalHandler} /> }
		</div>
	);
}

export default Item;
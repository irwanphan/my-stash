import Backdrop from "./Backdrop";

function Modal(props) {
    const cancelHandler = () => {
        props.onCancel();
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <p>are you sure</p>
                <button onClick={cancelHandler}>cancel</button>
                <button>yes</button>
            </div>
            <Backdrop onClick={cancelHandler}/>
        </div>
    );
}

export default Modal;
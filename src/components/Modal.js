import Backdrop from "./Backdrop";

function Modal(props) {
    return (
        <div className="modal-container">
            <div className="modal">
                <p>are you sure</p>
                <button>cancel</button>
                <button>yes</button>
            </div>
            <Backdrop onCancel={props.onCancel}/>
        </div>
    );
}

export default Modal;
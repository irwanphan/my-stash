// ref hook from react
import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewItemForm.module.sass"

function NewItemForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();
    const initialValueInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value
        const enteredInitialValue = initialValueInputRef.current.value

        const itemData = {
            title: enteredTitle,
            image: enteredImage,
            description: enteredDescription,
            initial_value: enteredInitialValue,
        }

        // console.log(itemData)
        props.onAddNewItem(itemData)
    }

    return <Card>
        <div>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.inputBlock}>
                    <label htmlFor="title">item title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.inputBlock}>
                    <label htmlFor="image">item image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.inputBlock}>
                    <label htmlFor="description">item description</label>
                    <textarea required id="description" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.inputBlock}>
                    <label htmlFor="initial_value">item initial value</label>
                    <input type="number" required id="initial_value" ref={initialValueInputRef} />
                </div>
                <div className={classes.inputBlock}>
                    <button>add item</button>
                </div>
            </form>
        </div>
    </Card>
}   

export default NewItemForm;
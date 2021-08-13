import Card from "../ui/Card";
import classes from "./NewItemForm.module.sass"

function NewItemForm() {
    return <Card>
        <div>
            <h3>add new item</h3>
            <form className={classes.form}>
                <div className={classes.inputBlock}>
                    <label htmlFor="title">item title</label>
                    <input type="text" required id="title" />
                </div>
                <div className={classes.inputBlock}>
                    <label htmlFor="image">item image</label>
                    <input type="url" required id="image" />
                </div>
                <div className={classes.inputBlock}>
                    <label htmlFor="description">item description</label>
                    <textarea required id="description"></textarea>
                </div>
                <div className={classes.inputBlock}>
                    <label htmlFor="initial_value">item initial value</label>
                    <input type="number" required id="initial_value" />
                </div>
                <div className={classes.inputBlock}>
                    <button>add item</button>
                </div>
            </form>
        </div>
    </Card>
}   

export default NewItemForm;
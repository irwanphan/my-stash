import Card from "../ui/Card";

function NewItemForm() {
    return <Card>
        <form>
            <div className>
                <label htmlFor="title">item title</label>
                <input type="text" required id="title" />
            </div>
            <div className>
                <label htmlFor="image">item image</label>
                <input type="url" required id="image" />
            </div>
            <div className>
                <label htmlFor="description">item description</label>
                <input type="text" required id="description" />
            </div>
            <div className>
                <label htmlFor="initial_value">item initial value</label>
                <input type="number" required id="initial_value" />
            </div>
        </form>
    </Card>
}   

export default NewItemForm;
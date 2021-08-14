import { useHistory } from "react-router-dom";

import NewItemForm from "../components/items/NewItemForm";

function NewItem() {
    const history = useHistory();

    function addNewItemHandler(itemData) {
        // first string parameter for API -> use firebase
        // second for method
        // fetch return a promise, so we can chain with then
        // replace history with the to/path
        fetch(
           'https://mystash-78e22-default-rtdb.asia-southeast1.firebasedatabase.app/items.json',
           {
               method: 'POST',
               body: JSON.stringify(itemData),
               headers: {
                   'Content-Type': 'application/json'
               },
           }
        ).then(() => {
            history.replace('/')
        }) 
    }

    return <div>
        <h3>add new item</h3>
        <NewItemForm onAddNewItem={addNewItemHandler} />
    </div>
}

export default NewItem;
import NewItemForm from "../components/items/NewItemForm";

function NewItem() {
    function addNewItemHandler(itemData) {
        // first string parameter for API -> use firebase
        // second for method
        fetch(
           'https://mystash-78e22-default-rtdb.asia-southeast1.firebasedatabase.app/items.json',
           {
               method: 'POST',
               body: JSON.stringify(itemData),
               headers: {
                   'Content-Type': 'application/json'
               },
           }
        ) 
    }

    return <div>
        <h3>add new item</h3>
        <NewItemForm onAddNewItem={addNewItemHandler} />
    </div>
}

export default NewItem;
import { Link } from "react-router-dom"

import ItemList from "../components/items/ItemList"
import FAB from "../components/ui/FAB"

const DUMMY_DATA = [
    {
        id: 1,
        title: 'the envy',
        image: 'https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/laptops/envy/envy-13-17-laptop/Fast%20memory%20storage-Desktop.png',
        description: 'a notebook that makes you envy',
        initial_value: 12000000,
    },
    {
        id: 2,
        title: 'the envy too',
        image: 'https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/laptops/envy/envy-13-17-laptop/Fast%20memory%20storage-Desktop.png',
        description: 'a notebook that makes you envy',
        initial_value: 12000000,
    },
]

function AllItems() {
    fetch(
        'https://mystash-78e22-default-rtdb.asia-southeast1.firebasedatabase.app/items.json'
    ).then(response => {
        // json also return promise, so need to wait
        return response.json();
    }).then(data => {
        // need to wait the promise is fully consumed then show the data
        // before that we need to return the jsx showing loading condition
    })

    return <div>
        <ItemList data={DUMMY_DATA} />
        <Link to="/new-item">
            <FAB>&#10133;</FAB>
        </Link>
    </div>
}

export default AllItems;
import ItemList from "../components/items/ItemList"

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
    return <div>
        <ItemList data={DUMMY_DATA} />
    </div>
}

export default AllItems;
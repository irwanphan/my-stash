const DUMMY_DATA = [
    {
        id: 1,
        title: 'the envy',
        image: 'https://asset.kompas.com/crops/4x5kidx_7dPayogD3ycK0DDa-3U=/0x0:780x520/750x500/data/photo/2019/11/04/5dbfe1b1ea4f8.jpg',
        description: 'laptop for working',
        value: 12000000
    },
    {
        id: 2,
        title: 'the envy 2',
        image: 'https://asset.kompas.com/crops/4x5kidx_7dPayogD3ycK0DDa-3U=/0x0:780x520/750x500/data/photo/2019/11/04/5dbfe1b1ea4f8.jpg',
        description: 'laptop for working',
        value: 12000000
    }
]

function AllItems() {
    return <section>
        <h3>All Items</h3>
        {
            [
                DUMMY_DATA[0].title,
                DUMMY_DATA[1].title,
            ]
        }
    </section>
}

export default AllItems;
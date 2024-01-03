import { useSelector } from "react-redux"
import ListItem from "./ListItem"
import Spinner from "./Spinner"

// Delete from state - onClick
// Delete from json - "DELETE" method

const List = () => {
    const { heroes, status, activeFilter } = useSelector(state => state)
    
    if (status === "loading") {
        return <Spinner/>
    } else if (status === "error") {
        return <h5 className="text-center mt-5">Error occured while loading</h5>
    }

    const renderList = (arr, activeFilter) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">There are no entries yet</h5>
        }

        let arrReversed = []
        for (let i = 0; i < arr.length; i++) arrReversed.unshift(arr[i])

        return arrReversed.map(({id, ...props}) => {
            return <ListItem key={id} activeFilter={activeFilter} {...props}/>
        })
    }

    const elements = renderList(heroes, activeFilter)

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default List
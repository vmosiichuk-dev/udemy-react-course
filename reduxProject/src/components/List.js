import { useDispatch, useSelector } from "react-redux"
import { useHttp } from "../hooks/http.hook"
import { deleteDeity, error } from "../store/actions"
import ListItem from "./ListItem"
import Spinner from "./Spinner"

const List = () => {
    const { deities, status, activeFilter } = useSelector(state => state)
    const dispatch = useDispatch()
    const { request } = useHttp()

    const handleDelete = async (e) => {
        const deityID = e.target.closest("li").dataset.deityId

        try {
            await request(`http://localhost:3001/deities/${deityID}`, "DELETE")
            dispatch(deleteDeity(deityID))
        } catch (err) {
            dispatch(error())
        }
    }
    
    if (status === "loading") {
        return <Spinner/>
    } else if (status === "error") {
        return <h5 className="text-center mt-5">Error occured while loading</h5>
    }

    const renderList = (arr, activeFilter, handleDelete) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">There are no entries yet</h5>
        }

        let arrReversed = []
        for (let i = 0; i < arr.length; i++) arrReversed.unshift(arr[i])

        return arrReversed.map(({id, ...props}) => {
            return <ListItem key={id} id={id} activeFilter={activeFilter} handleDelete={handleDelete} {...props}/>
        })
    }

    const elements = renderList(deities, activeFilter, handleDelete)

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default List
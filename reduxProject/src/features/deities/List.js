import { useEffect, useCallback } from "react"
import { useDispatch/* , useSelector */ } from "react-redux"
import { deitiesFetchList, deitiesDeleteItem/* , filteredDeitiesSelector */ } from "./deitiesSlice"
import { useGetDeitiesQuery } from "../../api/apiSlice"
import ListItem from "../../components/ListItem"
import Spinner from "../../components/Spinner"

const List = () => {
    const {
        data: deities = [],
        isFetching,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetDeitiesQuery()

    // const filteredDeities = useSelector(filteredDeitiesSelector)
    // const status = useSelector(state => state.deities.status)
    const dispatch = useDispatch()

    const handleDelete = useCallback(deityID => {
        dispatch(deitiesDeleteItem(deityID))
    }, [dispatch])

    useEffect(() => {
        dispatch(deitiesFetchList())
    }, [dispatch])
    
    if (isLoading || isFetching) {
        return <Spinner/>
    } else if (isError) {
        return <h5 className="text-center mt-5">{error}</h5>
    }

    const renderList = (arr, handleDelete) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">There are no entries yet</h5>
        }

        const arrReversed = arr.slice().reverse()
        return arrReversed.map(({id, ...props}) => {
            return <ListItem key={id} id={id} handleDelete={handleDelete} {...props}/>
        })
    }

    const elements = renderList(deities, handleDelete)

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default List
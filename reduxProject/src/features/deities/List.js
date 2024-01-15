import { useCallback, useMemo } from "react"
import { useSelector } from "react-redux"
import { useGetDeitiesQuery, useDeleteDeityMutation } from "../../api/apiSlice"
import ListItem from "../../components/ListItem"
import Spinner from "../../components/Spinner"

const List = () => {
    const {
        data: deities = [],
        isLoading,
        isError,
        error
    } = useGetDeitiesQuery()

    const activeFilter = useSelector(state => state.filters.activeFilter)

    const filteredDeities = useMemo(() => {
        const filteredDeities = deities.slice()

        if (activeFilter === "all") {
            return filteredDeities
        } else {
            return filteredDeities.filter(item => item.element === activeFilter)
        }
    }, [activeFilter, deities])

    const [deleteDeity] = useDeleteDeityMutation()

    const handleDelete = useCallback(deityID => {
        deleteDeity(deityID)
    }, [deleteDeity])
    
    if (isLoading) {
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

    const elements = renderList(filteredDeities, handleDelete)

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default List
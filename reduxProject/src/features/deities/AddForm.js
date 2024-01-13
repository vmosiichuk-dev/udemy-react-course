import { useState, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { deitiesSubmitForm } from "./deitiesSlice"
import { v4 as uuidv4 } from "uuid"

const AddForm = () => {
    const filters = useSelector(state => state.filters.filters)
    const dispatch = useDispatch()

    const [nameValue, setNameValue] = useState("")
    const [domainValue, setDomainValue] = useState("")
    const [elementValue, setElementValue] = useState("")

    const handleSubmit = useCallback(e => {
        const userAddedDeity = {
            id: uuidv4(),
            name: nameValue, 
            domain: domainValue, 
            element: elementValue
        }

        e.preventDefault()        
        dispatch(deitiesSubmitForm(userAddedDeity))

        setNameValue("")
        setDomainValue("")
        setElementValue("")
    }, [dispatch, nameValue, domainValue, elementValue, setNameValue, setDomainValue, setElementValue])

    const renderOptions = (filters) => {
        if (filters.length === 0) return null

        return filters.map(({ filter }) => {
            if (filter === "all") return null

            return <option 
                key={`option: ${filter}`} 
                value={filter}>
                {filter}
            </option>
        })
    }
    
    const options = renderOptions(filters)

    return (
        <form className="bg-glass p-4 shadow-lg rounded-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Name</label>
                <input 
                    required
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="What is the deity's name?"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="domain" className="form-label fs-4">Domain</label>
                <input
                    required
                    value={domainValue}
                    onChange={(e) => setDomainValue(e.target.value)}
                    type="text"
                    name="domain" 
                    className="form-control" 
                    id="domain" 
                    placeholder="What is the deity's main ability?"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="element" className="form-label fs-4">Element</label>
                <select 
                    required
                    value={elementValue}
                    onChange={(e) => setElementValue(e.target.value)}
                    className="form-select" 
                    id="element" 
                    name="element">
                    <option style={{"display": "none"}}>Choose an associated element</option>
                    {options}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Add deity</button>
        </form>
    )
}

export default AddForm
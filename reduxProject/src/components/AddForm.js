import { useSelector, useDispatch } from "react-redux"
import { name, domain, element, submit, error } from "../store/actions"
import { useHttp } from "../hooks/http.hook"
import { v4 as uuidv4 } from "uuid"

const AddForm = () => {
    const { nameValue, domainValue, elementValue, filters } = useSelector(state => state)
    const dispatch = useDispatch()
    const { request } = useHttp()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userAddedDeity = {
            id: uuidv4(),
            name: nameValue, 
            domain: domainValue, 
            element: elementValue
        }

        try {
            await request("http://localhost:3001/deities", "POST", JSON.stringify(userAddedDeity))
            dispatch(submit(userAddedDeity))
        } catch (err) {
            dispatch(error())
        }
    }

    const renderOptions = (arr) => {
        return arr.map((item, i) => {
            let option = (<option key={`option ${i + 1}`} value={item}>{item}</option>)
            if (i === 0) option = null
            return option
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
                    onChange={(e) => dispatch(name(e.target.value))}
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
                    onChange={(e) => dispatch(domain(e.target.value))}
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
                    onChange={(e) => dispatch(element(e.target.value))}
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
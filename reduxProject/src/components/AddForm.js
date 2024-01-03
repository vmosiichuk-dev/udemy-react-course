import { useSelector, useDispatch } from "react-redux"
import { name, skill, element, submit, error } from "../store/actions"
import { useHttp } from "../hooks/http.hook"
import { v4 as uuidv4 } from "uuid"

const AddForm = () => {
    const { nameValue, skillValue, elementValue, filters } = useSelector(state => state)
    const dispatch = useDispatch()
    const { request } = useHttp()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userAddedHero = {
            id: uuidv4(),
            name: nameValue, 
            skill: skillValue, 
            element: elementValue
        }

        try {
            await request("http://localhost:3001/heroes", "POST", JSON.stringify(userAddedHero))
            dispatch(submit(userAddedHero))
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
        <form className="border p-4 shadow-lg rounded" onSubmit={handleSubmit}>
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
                    placeholder="What is the hero's name?"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="skill" className="form-label fs-4">Skill</label>
                <input
                    required
                    value={skillValue}
                    onChange={(e) => dispatch(skill(e.target.value))}
                    type="text"
                    name="skill" 
                    className="form-control" 
                    id="skill" 
                    placeholder="What is the hero's main ability?"
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
            <button type="submit" className="btn btn-primary">Add hero</button>
        </form>
    )
}

export default AddForm
import { useState, useMemo, useDeferredValue, useTransition } from "react"
import data from "./data"

function App() {
    const [text, setText] = useState("")
    const [posts, setPosts] = useState(data)

    // const deferredValue = useDeferredValue(text.toLowerCase())
    
    const [isPending, startTransition] = useTransition()

    const filteredPosts = useMemo(() => {
        return posts.filter(item => {
            return item.name.toLowerCase().includes(text.toLowerCase())
        })
    }, [text, posts])

    const onValueChange = (e) => {
        startTransition(() => {
            setText(e.target.value)
        })
    }

    return (
        <>
            <input value={text} type="text" onChange={onValueChange}/>
            <hr/>
            <div>
                {isPending 
                    ? <h4>Loading</h4> 
                    : filteredPosts.map(post => (
                        <div key={post._id}>
                            <h4>{post.name}</h4>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default App
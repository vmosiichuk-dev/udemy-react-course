import { useSelector, useDispatch } from "react-redux"
import { inc, dec, rnd } from "../store/actions"

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div className="app jumbotron">
            <h1>{counter}</h1>
            <button 
                onClick={() => dispatch(dec())} 
                className="btn btn-primary">
                DEC
            </button>
            <button 
                onClick={() => dispatch(inc())} 
                className="btn btn-primary">
                INC
            </button>
            <button 
                onClick={() => dispatch(rnd())} 
                className="btn btn-primary">
                RND
            </button>
        </div>
    )
}

export default Counter

// import { connect } from "react-redux"
// import * as actions from "../store/actions"

// const Counter = ({ counter, inc, dec, rnd }) => {
//        ...
//    }

// const mapStateToProps = (state) => ({ counter: state.counter })
// export default connect(mapStateToProps, actions)(Counter) 
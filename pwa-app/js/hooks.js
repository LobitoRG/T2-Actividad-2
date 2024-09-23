// Hook de estado básico useState
export function useState(initialValue) {
    let state = initialValue;
    function setState(newValue) {
        state = newValue;
        return state;
    }
    return [state, setState];
}

// Custom Hook: useCounter
export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue);
    
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    
    return { counter, increment, decrement };
}

// Hook useReducer
export function useReducer(reducer, initialState) {
    let [state, dispatch] = useState(initialState);
    
    const reducerDispatch = (action) => {
        state = reducer(state, action);
        dispatch(state);
    };
    
    return [state, reducerDispatch];
}

import React from "react";
import Counter from "./Counter";

export default () => (
    <Counter
        render={({count, increment, decrement}) => (
            <>
                <h2>Current Count : {count}.</h2>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </>
        )}
        initialValue={10}
    />
)
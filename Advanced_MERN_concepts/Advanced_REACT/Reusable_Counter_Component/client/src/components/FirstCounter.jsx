import React from "react";
import Counter from "./Counter";

export default () => (
    <Counter
        render={({count, increment}) => (
            <>
                <h2>The count is currently {count}.</h2>
                <button onClick={increment}>Add One</button>
            </>
        )}
        initialValue={5}
    />
)
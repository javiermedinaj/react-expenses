import React from 'react'
import { useGlobalState } from '../context/GlobalState'
const Balance = () => {

    const data = useGlobalState()

    return (
        <div>
            <h1>balance</h1>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    )
}

export default Balance
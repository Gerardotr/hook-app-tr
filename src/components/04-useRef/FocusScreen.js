import React, {useRef} from 'react';

import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <div>
            <h1>
                FocusScreen
            </h1>
            <hr />
            <input ref={inputRef} type="text" className='form-control' placeholder='Su nombre' />

            <button onClick={handleClick} className='mt-2 btn btn-primary'>Focus</button>

        </div>
    )
}

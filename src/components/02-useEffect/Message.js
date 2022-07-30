import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cords, setCord] = useState({ x: 0, y: 0 });
    const { x, y } = cords;

    useEffect(() => {
        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            setCord(coords);
        }
        window.addEventListener('mousemove', mouseMove);
        console.log('componente montado')
        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log('componente desmontado')
        }
    }, []);

    return (
        <div>

            <h3>Hola mundo</h3>

            <p>
                x: {x} y: {y}
            </p>

        </div>
    )
}

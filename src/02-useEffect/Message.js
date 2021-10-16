import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('componenete montado')
        const event = window.addEventListener('mousemove', (e) =>{
            const coors = {x:e.x, y:e.y}
            console.log(coors);
        });
        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', event);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
        </div>
    )
}

import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const CursorDiv = styled.div`
    position : fixed;
    top : '';
    color  : white ;
    font-size : 4rem;
`
const Cursor = () => {
    const [y, setY] = useState(0)
    const ref = useRef(null)
    useEffect(() => {
        const height = ref.current.offsetHeight;
        const width = ref.current.offsetWidth;
        ref.current.addEventListener('mousemove', (e) => {
            setTimeout(() => {
                ref.current.style.left = `${e.clientX - width /2 }px`;
                ref.current.style.top = `${e.clientY - height / 2}px`;
            }, 20)

        })

    },[])
    return (
        <CursorDiv ref={ref}>
            make a move
        </CursorDiv>
    )
}
export default Cursor;
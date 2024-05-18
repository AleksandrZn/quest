import styled from "styled-components";
import { useEffect, useState } from "react"

const BagItem = styled.div`
box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.5);
touch-action: none;
${props => props.start && `position: absolute; z-index:1000; left:${props.position.x}px; top:${props.position.y}px`};
width: 27px;
height: 26px;
text-align: center;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
line-height: 0%;
font-family: sans-serif;
font-weight: bold;
border-radius:10px;
background-color:${props => props.color} ;
color: white;
`

const DragItem = ({ color, elemId, elemText, liters, setCurrent, current, setResLiters }) => {

    const [position, setPosition] = useState({ x: null, y: null })
    const [releaseElemId, setReleaseElemId] = useState(null)
    const [dragStart, setDragStart] = useState(false)

    useEffect(() => {
        if (dragStart) {
            setReleaseElemId(document.elementsFromPoint(position.x, position.y)[0]?.id);
        }
    }, [position])

    const getElemId = (string) => {
        return string?.split("+")[0]
    }

    const getPosResLiter = (string) => {
        return string?.split("+")[1]
    }

    const handlePointerDown = (e) => {
        setDragStart(true);
        setPosition({ x: e.pageX - e.target.offsetWidth / 2, y: e.pageY - e.target.offsetHeight / 2 })
        setCurrent(liters.find(item => getElemId(item?.id) === getElemId(e.target?.id)))
    }



    const handlePointerMove = (e) => {
        setPosition({ x: e.pageX - e.target.offsetWidth / 2, y: e.pageY - e.target.offsetHeight / 2 });
    }

    const handlePointerUp = (e) => {
        setResLiters((resLiters) =>
            [...resLiters].map((item, i) => getPosResLiter(releaseElemId) == i ? { ...item, liter: current.liter, correctly: getElemId(releaseElemId) === current.id ? true : false } : item)
        )
        setDragStart(false);
    }

    return <div style={{
        width: "32px",
        height: "31px", display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}> <BagItem id={elemId} color={color} position={position} start={dragStart} onPointerDown={(e) => handlePointerDown(e)} onPointerMove={(e) => handlePointerMove(e)} onPointerUp={(e) => handlePointerUp(e)} >{elemText}</BagItem>
    </div>
}
export default DragItem
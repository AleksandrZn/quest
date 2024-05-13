import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import blue from './image/Blue.png'
import brown from './image/Brown.png'
import green from './image/Green.png'
import yellow from './image/Yellow.png'

export const useDragAndDrop = () => {
    const liters = [
        {
            backgroundColor: blue,
            liter: "И",
            id: uuidv4() + "+A",
        },
        {
            backgroundColor: blue,
            liter: "У",
            id: uuidv4() + "+A",
        },
        ,
        {
            backgroundColor: brown,
            liter: "П",
            id: uuidv4() + "+A",
        }, {
            backgroundColor: brown,
            liter: "С",
            id: uuidv4() + "+A",
        },
        {
            backgroundColor: green,
            liter: "Н",
            id: uuidv4() + "+A",
        }, {
            backgroundColor: green,
            liter: "Р",
            id: uuidv4() + "+A",
        },
        {
            backgroundColor: yellow,
            liter: "Е",
            id: uuidv4() + "+A",
        }, {
            backgroundColor: yellow,
            liter: "Т",
            id: uuidv4() + "+A",
        }
    ]
    const [resLiters, setResLiters] = useState([
        {
            backgroundColor: brown,
            liter: "П",
            id: uuidv4() + "+B",
        }, {
            backgroundColor: green,
            liter: "Р",
            id: uuidv4() + "+B",
        }, {
            backgroundColor: blue,
            liter: "И",
            id: uuidv4() + "+B",
        },
        {
            backgroundColor: green,
            liter: "Н",
            id: uuidv4() + "+B",
        }, {
            backgroundColor: yellow,
            liter: "Т",
            id: uuidv4() + "+B",
        },
        {
            backgroundColor: yellow,
            liter: "Е",
            id: uuidv4() + "+B",
        }, {
            backgroundColor: green,
            liter: "Р",
            id: uuidv4() + "+B",
        }
    ])

    const [current, setCurrent] = useState(null)
    const [position, setPosition] = useState({ x: null, y: null })
    const [dragStart, setDragStart] = useState(false)


    useEffect(() => {
        if (dragStart) {
            const elem = document.elementsFromPoint(position.x, position.y)
            getElemId(elem[1].id) === getElemId(liters[0].id) ? console.log(elem[1].id) : console.log("Не тот")
        }
    }, [position])

    const getElemId = (string) => {
        return string.split("+")[0]
    }

    const getStateId = (string) => {
        return string.split("+")[1]
    }

    const handlePointerDown = (e) => {
        setCurrent(liters[getElemId(e.id)]);
        setDragStart(true);
        setPosition({ x: e.pageX - e.target.offsetWidth / 2, y: e.pageY - e.target.offsetHeight / 2 })
    }

    const handlePointerMove = (e) => {
        setPosition({ x: e.pageX - e.target.offsetWidth / 2, y: e.pageY - e.target.offsetHeight / 2 });
    }

    const handlePointerUp = (e) => {
        setDragStart(false);
        setResLiters((prevState) =>
            [...prevState].map((item) => item.id === getElemId(e.target.id) ? item : current.item)
        )
    }
    return [liters, resLiters, handlePointerDown, handlePointerMove, handlePointerUp]
}

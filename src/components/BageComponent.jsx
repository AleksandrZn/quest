import styled from "styled-components";
import { useEffect, useState } from "react"
import BlueImg from '../image/Blue.png'
import BrownImg from '../image/Brown.png'
import GreenImg from '../image/Green.png'
import YellowImg from '../image/Yellow.png'
import DragItem from "./DragItemComponent";
const Bag = styled.div`
width: 64px;
height: 62px;
background-image: url(${props => props.bag});

`
const BagItemWrapper = styled.div`
width: 64px;
height: 32px;
padding-top:30px;
display: flex;
`

const BagsCard = styled.div`
width: 90%;
align-items: center;
margin:15% 0 5% 0;
font-family: sans-serif;
text-align:center;
color:#FEF6FF;
line-height: 130%;
font-size: 16px;
display: flex;
justify-content:space-evenly;
`
const BageComponent = ({ setResLiters }) => {
    const dictionary = {
        liters: [
            {
                backgrounImg: BlueImg,
                color: "#6E92F5",
                liter: "И",
                id: "I",
            },
            {
                backgrounImg: BlueImg,
                color: "#6E92F5",
                liter: "У",
                id: "U",
            },
            {
                backgrounImg: BrownImg,
                color: "#A07D89",
                liter: "П",
                id: "P",
            }, {
                backgrounImg: BrownImg,
                color: "#A07D89",
                liter: "С",
                id: "S",
            },
            {
                backgrounImg: GreenImg,
                color: "#6EF57B",
                liter: "Н",
                id: "N",
            }, {
                backgrounImg: GreenImg,
                color: "#6EF57B",
                liter: "Р",
                id: "R",
            },
            {
                backgrounImg: YellowImg,
                color: "#F5CF6E",
                liter: "Е",
                id: "E",
            }, {
                backgrounImg: YellowImg,
                color: "#F5CF6E",
                liter: "Т",
                id: "T",
            }
        ],
        getOrderedLiters() {
            let resBuff = [];
            let elemBuff = null;
            let type = null
            this.liters.forEach(function (elem, i, arr) {
                if (elemBuff === null) {
                    elemBuff = {
                        backgrounImg: elem.backgrounImg, liters: [{ liter: elem.liter, id: elem?.id, color: elem.color }]
                    }
                    type = elem.backgrounImg
                    return
                }
                else
                    if (type === elem.backgrounImg) {
                        elemBuff.liters = [...elemBuff.liters, { liter: elem.liter, id: elem?.id, color: elem.color }]
                        resBuff = [...resBuff, elemBuff]
                        elemBuff = null
                    }
            });
            return resBuff
        }

    }

    const [current, setCurrent] = useState(null)

    return <BagsCard>
        {dictionary.getOrderedLiters().map((item) =>
            < Bag bag={item.backgrounImg} >
                <BagItemWrapper>
                    {item.liters.map((elem) => <DragItem color={elem.color} setCurrent={setCurrent} current={current} setResLiters={setResLiters} elemId={elem?.id} elemText={elem.liter} liters={dictionary.liters} />)}
                </BagItemWrapper>
            </Bag >)}
    </BagsCard >
}
export default BageComponent  
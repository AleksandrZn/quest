import styled from "styled-components";
import logo from './image/logo.svg'
import avatar from './image/Avatar.svg'
import send from './image/Send.svg'
import blue from './image/Blue.png'
import brown from './image/Brown.png'
import green from './image/Green.png'
import yellow from './image/Yellow.png'
import B from './image/BlackB.svg'
import A from './image/WhiteB.svg'
import Map from "./image/Map.png"
import { useEffect, useState } from "react";

const Container = styled.div`
  background-color: #FEF6FF;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
max-width: 500px;
flex: 1 1 auto;
display: flex;
justify-content: center;
align-items: center;

`
const Logo = styled.div`
width: auto;
height: auto;
transition: all 0.5s ease;
  animation: scale 1s linear infinite;
  @keyframes scale {
  0% {
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }}
`
const Chat = styled.div`
width: 90%;
height: 95%;
display: flex;
flex-direction: column;
margin: 2.5%  auto;
`
const ChatHeader = styled.div`
height: 62px;
width: 100%;
display:flex;
font-family: sans-serif;
align-self: self-start;
`
const ChatSend = styled.div`
width: 100%;
display: flex;
flex-shrink: 0;
justify-content: space-between;
`
const ChatSendInput = styled.input`
&:focus{
  outline: none !important;
}
width:90%;
border: none;
font-family: sans-serif;
font-size: 16px;
color:#F46D9A;

`
const ChatSendWrapperInput = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:80%;
height: 48px;
border-radius: 15px;
background-color: white;
`
const ChatSendBtn = styled.img`
height: 48px;
`

const HeaderImage = styled.img`
border-radius: 50%;
`
const HeaderText = styled.div`
display: flex;
flex-direction: column;
padding-left: 15px;
justify-content: space-evenly;
`
const HeaderTextName = styled.div`
color: #F46D9A;
font-size: 20px;

`
const HeaderTextStatus = styled.div`
font-size:12px;
color:rgba(244, 109, 154, 0.7);
display: flex;
align-items: center;
`
const QuestCard = styled.div`
//position: relative;
height: 70%;
width: 96%;
margin: 2% auto;
border-radius:25px;
display: flex;
align-self: center;
align-items: center;
background-color: #F46D9A;
flex-direction: column;
`
const CardText = styled.div`
width: 90%;
align-items: center;
margin:15% 0 0% 0;
font-family: sans-serif;
text-align:center;
color:#FEF6FF;
line-height: 100%;
font-size: 17px;
font-weight: bold;
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
const BagItem = styled.div`
touch-action: none;
${props => props.start && `position: absolute; z-index:1000; left:${props.position.x}px; top:${props.position.y}px`};
width: 32px;
height: 31px;
text-align: center;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
line-height: 0%;
font-family: sans-serif;
font-weight: bold;
`

const AnswerWrapper = styled.div`
display: flex;
justify-content:space-evenly;
width: 96%;
margin: 2% auto;
`
const AnswerLiter = styled.div`
width: 32px;
height: 32px;
text-align: center;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
line-height: 0%;
font-family: sans-serif;
font-weight: bold;
border-radius:5px;
background-color:${props => props.color} ;
color: white;
`

const Clue = styled.div`
width: 90%;
align-items: center;
font-family: sans-serif;
text-align:center;
color:#FEF6FF;
line-height: 100%;
font-size: 12px;
margin:8% 0 10% 0;

`
const Decore = styled.img`
position:absolute;
top: ${props => props.top} ;
left: ${props => props.left} ;
transform: scale(${props => props.scaleA} , ${props => props.scaleB} );
`
const AnimaitionPrinting = styled.div`
&{
  margin-left:5px;
  margin-bottom: 5px;
  display:inline-block;
  font-family: monospace;
  font-size:12px;
color:rgba(244, 109, 154, 0.7);
  clip-path: inset(0 3ch 0 0);
  animation: l 1s steps(4) infinite;
}

@keyframes l {
  to {
    clip-path: inset(0 -1ch 0 0)
  }
}
`

const TYPES_MESSAGE = {
  SCRIPT: "script",
  USER: "user",
}
const MessageWrapper = styled.div`
font-family: sans-serif;
font-size: 14px;
line-height: 150%;
width:80%; 
padding-top: 18px;
margin-left:${({ $typemessage }) => $typemessage === TYPES_MESSAGE.USER ? "auto" : "none"};
`
const Message = styled.div`
background-color:${({ $typemessage }) => $typemessage === TYPES_MESSAGE.USER ? "#F46D9A" : "#F7CAC9"};
padding: 14px 16px 18px 16px;
border-radius:${({ $typemessage }) => $typemessage === TYPES_MESSAGE.USER ? "15px 15px  0 15px" : "15px 15px 15px 0"};

`
const MessageContent = styled.div`
color:${({ $typemessage }) => $typemessage === TYPES_MESSAGE.USER ? "#F2F2F2" : "#F46D9A"};
& img{
  width: 100%;
  height: 100%;
}
`
const MessageTime = styled.div`
display: flex;
font-family: sans - serif;
font-size: 12px;
line-height: 150%;
color: rgba(244, 109, 154, 0.7);
${({ $typemessage }) => $typemessage === TYPES_MESSAGE.SCRIPT ? "padding-right: 16px" : "padding-left: 16px"};
justify-content:${({ $typemessage }) => $typemessage === TYPES_MESSAGE.SCRIPT ? "flex-end" : "flex-start"};
align-items: center;
`
const MessageComponent = ({ elem }) => {
  return <MessageWrapper $typemessage={elem?.from}>
    <Message $typemessage={elem?.from}>
      <MessageContent $typemessage={elem?.from}>
        {elem?.text}
        {elem.image && < img src={elem?.image} alt={"Map"} />}
      </MessageContent>
    </Message>
    <MessageTime $typemessage={elem?.from}>{elem?.time}</MessageTime>
  </MessageWrapper>

}

function App() {
  const [position, setPosition] = useState({ x: null, y: null })
  const [dragStart, setDragStart] = useState(false)
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    if (dragStart) {

    }
  }, [position])

  const BageComponent = (bag, values) => {
    return <Bag bag={bag}>
      <BagItemWrapper>
        {values.map((value) => <div style={{
          width: "32px",
          height: "31px",
        }}> <BagItem id={value.id} start={value.id === current?.id && dragStart} position={position} onPointerDown={(e) => { setCurrent({ leter: value.leter, id: value.id }); setDragStart(true); setPosition({ x: e.pageX - e.target.offsetWidth / 2, y: e.pageY - e.target.offsetHeight / 2 }) }} onPointerMove={(e) => { setPosition({ x: e.pageX - e.target.offsetWidth / 2, y: e.pageY - e.target.offsetHeight / 2 }) }} onPointerUp={() => setDragStart(false)} >{visible.indexOf(value.id) === -1 ? value.leter : ""}</BagItem>
        </div>)}
      </BagItemWrapper>
    </Bag >
  }


  const [value, setValue] = useState(["", "Р", "", "Н", "", "Е", ""])
  const [next, setNext] = useState(false)
  const [pageNumber, setPageNumber] = useState("Logo")
  const [animation, setAnimation] = useState(true)
  const [inp, setInp] = useState("")
  const [chatValues, setChatValues] = useState([])
  const [visible, setVisible] = useState([])

  const bagLiters = [{
    bag: blue, A: {
      leter: "И",
      id: 1
    },
    B: {
      leter: "У",
      id: 2
    },
  }, {
    bag: brown, A: {
      leter: "П",
      id: 3
    }, B: {
      leter: "С",
      id: 4
    },
  }, {
    bag: green, A: {
      leter: "Н",
      id: 5
    }, B: {
      leter: "Р",
      id: 6
    },
  }, {
    bag: yellow, A: {
      leter: "Е",
      id: 7
    }, B: {
      leter: "Т",
      id: 8
    }
  }]
  const AnswerLeters = [{ leter: "", color: "#A07D89", id: 3 }, { leter: "Р", color: "#6EF57B" }, { leter: "", color: "#6E92F5", id: 1 }, { leter: "Н", color: "#6EF57B" }, { leter: "", color: "#F5CF6E", id: 8 }, { leter: "Е", color: "#F5CF6E" }, { leter: "", color: "#6EF57B", id: 6 }]
  const ResultAnswerLeters = ["П", "Р", "И", "Н", "Т", "Е", "Р"]
  const load = " \"Твой Сашка\" печатает сообщение..."
  const chatFirst = [
    { text: "Дорогая, поздравляю тебя с Международным женским днём 8 Марта 💋 💋 💋 Из всех женщин на Земле ты самая близкая и родная, для меня ты самая красивая, умная, славная 😍 Я хочу пожелать тебе сегодня, чтобы Весна всегда цвела в твоём сердце, каждое утро начиналось с улыбки, а дни были полны радости и вдохновения 😜 Хочу, чтобы ты была счастлива и этой весной, и следующей, и ещё долгие-долгие годы рядом со мной. С праздником, моя хорошая, люблю тебя 🌹 ❤", from: "script" },
    { text: "Готова к квесту с призами?", from: "script" },
    { text: "Конечно любимый 😍", from: "user" }
  ]
  const chatSecond = [
    { text: "Моя умничка, ты справилась! Остается только отправить мне кодовое слово и карта твоя.", from: "script" },
    { text: "ЛЮБЛЮ", from: "user" },
    { image: Map, from: "script" }

  ]

  const doChatting = (messages) => {
    new Promise((resolve) => {
      if (chatValues.length < messages.length && (messages[chatValues.length]?.from === TYPES_MESSAGE.SCRIPT || chatValues.length === 0)) {
        setTimer(() => {
          setChatValues(() => [...chatValues, { ...messages[chatValues.length], time: time(), }])
          setAnimation(false)
        }, 3000);
      } resolve(chatValues.length < messages.length && (messages[chatValues.length]?.from === TYPES_MESSAGE.SCRIPT || chatValues.length === 0))
    }).then((result) => setAnimation(result))
  }

  const time = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return currentTime
  }

  const setTimer = (func, ms) => {
    const timerId = setTimeout(() => {
      func();
    }, ms)
    return () => clearTimeout(timerId);
  }

  useEffect(() => {
    setTimer(() => setPageNumber("Chat"), 1000)
  }, []);

  useEffect(() => {
    if (pageNumber === "Chat") {
      if (next) {
        doChatting(chatSecond)
      } else {
        doChatting(chatFirst);
      }
    }
  }, [pageNumber, chatValues])

  useEffect(() => {
    if (value.toString() === ResultAnswerLeters.toString()) {
      setPageNumber('Logo')
      setTimer(() => { setPageNumber('Chat') }, 3000)
    }
  }, [value])


  const handleClick = (messages) => {
    if (messages.length === 2) {
      new Promise((resolve) => {
        setChatValues(() => [...messages, { ...chatFirst[messages.length], time: time(), }])
        setTimer(() => {
          setPageNumber('Logo')
          resolve()
        }, 2000);
      }).then(() => setTimer(() => {
        setPageNumber("Game")
        setChatValues([])
        setNext(true)
      }, 3000))
    }
    if (messages.length === 1 && inp === "ЛЮБЛЮ") {
      setInp("")
      setChatValues(() => [...messages, { ...chatSecond[messages.length], time: time(), }])
    }
  }

  return (
    <Container>
      <Content>
        {pageNumber === "Logo" && < Logo >
          <img src={logo} alt={"Logo"} />
        </Logo>}
        {pageNumber === "Game" &&
          < Chat >
            <ChatHeader>
              <HeaderImage src={avatar} alt="Avatar" />
              <HeaderText>
                <HeaderTextName>
                  Твой Сашка &#10084;
                </HeaderTextName>
                <HeaderTextStatus>
                  <p style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0ACF83" }} />
                  Online
                </HeaderTextStatus>
              </HeaderText>
            </ChatHeader>
            <div style={{ flexGrow: "1", overflow: "auto" }}>
              {chatValues.map((elem, i) => {
                return <MessageComponent elem={elem} key={elem?.from + i} />
              })
              }
            </div>
            <div>{animation && <AnimaitionPrinting>{load}</AnimaitionPrinting>}</div>

            <ChatSend>
              <ChatSendWrapperInput>
                <ChatSendInput onChange={(e) => setInp(e.target.value.toUpperCase())} disabled={false} value={inp} />
              </ChatSendWrapperInput>
              <ChatSendBtn src={send} alt="send" onClick={() => handleClick(chatValues)} />
            </ChatSend>
          </Chat>}
        {pageNumber === "Chat" &&
          <QuestCard>
            <CardText>
              "В женской сумочке, как известно, сложно что-либо найти. Вот и сейчас в каждой из сумочек затерялось по две буквы. Зная какие две буквы лежат в каждой сумке, постарайся расшифровать слово. Некоторые буквы уже заняли свои места."
            </CardText>
            <BagsCard>
              {bagLiters.map((elem) => BageComponent(elem.bag, [elem.A, elem.B]))}
            </BagsCard>
            <Clue>"Подставь буквы чтобы узнать где лежит кодовое слово, необходимое для получения карты сокровищ"</Clue>
            <AnswerWrapper>
              {AnswerLeters.map((elem, i) => <AnswerLiter color={elem.color} onPointerEnter={() => { if (current.id === elem.id) setValue((prevState) => { setVisible((prevState) => [...prevState, elem.id]); let res = [...prevState]; res.splice(i, 1, current.leter); return res; }) }} >{value[i]}</AnswerLiter>)}
            </AnswerWrapper>
            <Decore src={A} top="-10%" left="75%" scaleA={1} scaleB={1} />
            <Decore src={B} top="104%" left="63%" scaleA={-0.6} scaleB={0.6} />
            <Decore src={B} top="-18%" left="0%" scaleA={0.5} scaleB={0.5} />
            <Decore src={B} top="96%" left="0%" scaleA={1} scaleB={1} />
          </QuestCard>}
      </Content>
    </Container >

  );
}

export default App;

import styled from "styled-components";
import logo from './image/logo.svg'
import avatar from './image/Avatar.svg'
import send from './image/Send.svg'
import B from './image/BlackB.svg'
import A from './image/WhiteB.svg'
import Map from "./image/Map.png"
import { useEffect, useState } from "react";
import BageComponent from "./components/BageComponent";

const Container = styled.div`
  position: relative;
  background-color: #FEF6FF;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
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
user-select: none;
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

const AnswerWrapper = styled.div`
display: flex;
justify-content:space-evenly;
width: 96%;
margin: 2% auto;
`
const Liter = styled.div`
touch-action: none;
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
${props => !props.correctly && "box-shadow: inset 0px 0px 8px 2px rgba(0, 0, 0, 0.5);"} ;
color:white;
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
  const [next, setNext] = useState(false)
  const [pageNumber, setPageNumber] = useState("Logo")
  const [animation, setAnimation] = useState(true)
  const [inp, setInp] = useState("")
  const [chatValues, setChatValues] = useState([])

  const [resLiters, setResLiters] = useState([
    {
      color: "#A07D89",
      liter: "",
      id: "P" + "+0",
      correctly: false,
    }, {
      color: "#6EF57B",
      liter: "Р",
      id: "R" + "+1",
      correctly: true,
    }, {
      color: "#6E92F5",
      liter: "",
      id: "I" + "+2",
      correctly: false,

    },
    {
      color: "#6EF57B",
      liter: "Н",
      id: "N" + "+3",
      correctly: true,
    }, {
      color: "#F5CF6E",
      liter: "",
      id: "T" + "+4",
      correctly: false,
    },
    {
      color: "#F5CF6E",
      liter: "Е",
      id: "E" + "+5",
      correctly: true,
    }, {
      color: "#6EF57B",
      liter: "",
      id: "R" + "+6",
      correctly: false,
    }
  ])


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
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
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
    if (resLiters.map((elem) => elem.liter).toString() === ResultAnswerLeters.toString()) {
      setTimer(() => { setPageNumber('Logo') }, 1000)
      setTimer(() => { setPageNumber('Chat') }, 3000)
    }
  }, [resLiters])


  const handleClick = (messages) => {
    if (messages.length === 2) {
      new Promise((resolve) => {
        setChatValues(() => [...messages, { ...chatFirst[messages.length], time: time(), }])
        setTimer(() => {
          setPageNumber('Logo')
          setInp("")
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
        {pageNumber === "Chat" &&
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
        {pageNumber === "Game" &&
          <QuestCard>
            <CardText>
              "В женской сумочке, как известно, сложно что-либо найти. Вот и сейчас в каждой из сумочек затерялось по две буквы. Зная какие две буквы лежат в каждой сумке, постарайся расшифровать слово. Некоторые буквы уже заняли свои места."
            </CardText>
            <BageComponent setResLiters={setResLiters} />
            <Clue>"Подставь буквы чтобы узнать где лежит кодовое слово, необходимое для получения карты сокровищ"</Clue>
            <AnswerWrapper>
              {resLiters.map((elem) => <Liter correctly={elem.correctly} id={elem.id} color={elem.color}>{elem.liter}</Liter>)}
            </AnswerWrapper>
            <div style={{
              maxWidth: "500px",
              height: "70%",
              width: "96%",
              margin: "2% auto",
              display: "flex",
              alignSelf: "center",
              alignItems: "center",
              position: "absolute",
              pointerEvents: "none",
            }}>
              <Decore src={A} top="-10%" left="75%" scaleA={1} scaleB={1} />
              <Decore src={B} top="104%" left="63%" scaleA={-0.6} scaleB={0.6} />
              <Decore src={B} top="-18%" left="0%" scaleA={0.5} scaleB={0.5} />
              <Decore src={B} top="96%" left="0%" scaleA={1} scaleB={1} />
            </div>
          </QuestCard>}
      </Content>
    </Container >

  );
}

export default App;

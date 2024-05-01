import styled from "styled-components";
import logo from './image/logo.svg'
import avatar from './image/Avatar.svg'
import done from './image/Union.png'
import send from './image/Send.svg'
import blue from './image/Blue.png'
import brown from './image/Brown.png'
import green from './image/Green.png'
import yellow from './image/Yellow.png'
import B from './image/BlackB.svg'
import A from './image/WhiteB.svg'
import Map from "./image/Map.png"
import { useEffect, useRef, useState } from "react";

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

const ChatMessageWrapper = styled.div`
font-family: sans-serif;
font-size: 14px;
line-height: 150%;
width:80%; 
padding-top: 18px;
margin-left:${props => props.second ? "auto" : "none"};
`
const ChatMessage = styled.div`
background-color:${props => props.second ? "#F46D9A" : "#F7CAC9"}; 
padding: 14px 16px 18px 16px;
border-radius:${props => props.second ? "15px 15px  0 15px" : "15px 15px 15px 0"}; 

`
const ChatMessageText = styled.div`
color:${props => props.second ? "#F2F2F2" : "#F46D9A"};
& img{
width: 100%;
height: 100%;
}
`
const ChatMessageTime = styled.div`
display: flex;

font-family: sans-serif;
font-size: 12px;
line-height: 150%;
color:rgba(244, 109, 154, 0.7);
${props => props.second ? "padding-right: 16px" : "padding-left: 16px"};
justify-content:${props => props.second ? "flex-end" : "flex-start"}; 
align-items: center;
`

const HeaderImage = styled.img`
border-radius: 50%;
`
const HeaderText = styled.div`
display: flex;
flex-direction: column;
padding-left: 15px;
justify-content: space-evenly;`
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
position: relative;
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
const AnswerLiter = styled.input`
border: none;
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
&:focus{
  outline: none !important;
}
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
const PECHAT = styled.p`
&{
  margin-left:5px;
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

function App() {
  const bagLiters = [{ bag: blue, A: "И", B: "У" }, { bag: brown, A: "П", B: "С" }, { bag: green, A: "Н", B: "Р" }, { bag: yellow, A: "Е", B: "Т" }]
  const AnswerLeters = [{ leter: "", color: "#A07D89" }, { leter: "Р", color: "#6EF57B" }, { leter: "", color: "#6E92F5" }, { leter: "Н", color: "#6EF57B" }, { leter: "", color: "#F5CF6E" }, { leter: "Е", color: "#F5CF6E" }, { leter: "", color: "#6EF57B" }]
  const ResultAnswerLeters = ["П", "Р", "И", "Н", "Т", "Е", "Р"]
  const [value, setValue] = useState(["", "Р", "", "Н", "", "Е", ""])

  const [pageNumber, setPageNumber] = useState("1")
  const [animation, setAnimation] = useState(true)
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible33, setVisible33] = useState(false)
  const [visible44, setVisible44] = useState(false)
  const [date1, setDate1] = useState(null)
  const [date2, setDate2] = useState(null)
  const [date3, setDate3] = useState(null)
  const [inp, setInp] = useState("")

  const time = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return currentTime
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageNumber("2")
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (pageNumber === "2" || pageNumber === "4") {
      const timer = setTimeout(() => {
        setAnimation(false)
        setVisible1(true)
        setDate1(time())
      }, 3000);

      return () => clearTimeout(timer);
    }
    if (pageNumber === "2" && visible3) {
      const timer = setTimeout(() => {
        setAnimation(true)

      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [pageNumber]);
  const ref = useRef(null)




  useEffect(() => {
    if (visible1 === true && animation === false && visible2 === false ) {
      const timer = setTimeout(() => {
        setVisible2(true)
        setAnimation(false)
        setDate2(time())
      }, 3000);
      setAnimation(true)
      return () => clearTimeout(timer);
    }
  }, [visible1]);
  useEffect(() => {
    if (visible3) {
      const timer = setTimeout(() => {
        setPageNumber("3")
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [visible3]);
  useEffect(() => {
    if (visible3 === true) {
      const timer = setTimeout(() => {
        setPageNumber(1)
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible3]);

  useEffect(() => {
    if (visible33 === true) {
      const timer = setTimeout(() => {
        setAnimation(false)
        setVisible44(true)
      }, 3000); setAnimation(true)
      return () => clearTimeout(timer);
    }
  }, [visible33]);

  useEffect(() => {
    if (JSON.stringify(value) === JSON.stringify(ResultAnswerLeters)) {
      const timer = setTimeout(() => {
        setPageNumber("4")
      }, 3000);
      setPageNumber("1")
      setVisible1(false)
      setVisible2(false)
      setVisible3(false)
      return () => clearTimeout(timer);
    }

  }, [value]);


  const BageComponent = (bag, A, B) => {
    return <Bag bag={bag}>
      <BagItemWrapper>
        <BagItem>{A}</BagItem>
        <BagItem>{B}</BagItem>
      </BagItemWrapper>
    </Bag>
  }




  const load = " \"Твой Сашка\" печатает сообщение..."
  return (
    <Container>
      <Content>
        {pageNumber == "1" && < Logo >
          <img src={logo} alt={"Logo"} />
        </Logo>}
        {pageNumber == "2" &&
          < Chat >
            <ChatHeader>
              <HeaderImage src={avatar} alt="Avatar" />
              <HeaderText>
                <HeaderTextName>
                  Твой Сашка
                </HeaderTextName>
                <HeaderTextStatus>
                  <p style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0ACF83" }} />
                  Online
                </HeaderTextStatus>
              </HeaderText>
            </ChatHeader>
            <div style={{ flexGrow: "1", overflow: "auto" }}>
              {visible1 && <ChatMessageWrapper>
                <ChatMessage >
                  <ChatMessageText >Дорогая, поздравляю тебя с Международным женским днём 8 Марта &#128139; &#128139; &#128139; Из всех женщин на Земле ты самая близкая и родная, для меня ты самая красивая, умная, славная &#128525; Я хочу пожелать тебе сегодня, чтобы Весна всегда цвела в твоём сердце, каждое утро начиналось с улыбки, а дни были полны радости и вдохновения &#128540; Хочу, чтобы ты была счастлива и этой весной, и следующей, и ещё долгие-долгие годы рядом со мной. С праздником, моя хорошая, люблю тебя &#127801; &#10084;

                  </ChatMessageText>

                </ChatMessage>
                <ChatMessageTime >{date1}</ChatMessageTime>
              </ChatMessageWrapper>}
              {visible2 && <ChatMessageWrapper>
                <ChatMessage >
                  <ChatMessageText >Готова к квесту с призами?

                  </ChatMessageText>

                </ChatMessage>
                <ChatMessageTime >{date2}</ChatMessageTime>
              </ChatMessageWrapper>}
              {visible3 && <ChatMessageWrapper second>
                <ChatMessage second>
                  <ChatMessageText second>Конечно любимый 😍</ChatMessageText>
                </ChatMessage>
                <ChatMessageTime second>{date3}<img src={done} alt="done" style={{ width: "13px", height: "8px", padding: "3px" }} /></ChatMessageTime>
              </ChatMessageWrapper>}
            </div>
            <div>{animation && <PECHAT>{load}</PECHAT>}</div>

            <ChatSend>
              <ChatSendWrapperInput>
                <ChatSendInput />
              </ChatSendWrapperInput>
              <ChatSendBtn src={send} alt="send" onClick={() => {
                if (visible2) {
                  setVisible3(true)
                  setDate3(time())
                }

              }} />
            </ChatSend>
          </Chat>}
        {pageNumber === "3" &&
          <QuestCard>
            <CardText>
              "В женской сумочке, как известно, сложно что-либо найти. Вот и сейчас в каждой из сумочек затерялось по две буквы. Зная какие две буквы лежат в каждой сумке, постарайся расшифровать слово. Некоторые буквы уже заняли свои места."
            </CardText>
            <BagsCard>
              {bagLiters.map((elem) => BageComponent(elem.bag, elem.A, elem.B))}
            </BagsCard>
            <Clue>"Подставь буквы чтобы узнать где лежит кодовое слово, необходимое для получения карты сокровищ"</Clue>
            <AnswerWrapper>
              {AnswerLeters.map((elem, i) => <AnswerLiter onChange={(e) => setValue([...value].map((v, j) => i
                == j ? e.target.value.toUpperCase() : v.toUpperCase()))} color={elem.color} maxLength={1} value={value[i]} disabled={elem.leter == "" ? false : true} />)}
            </AnswerWrapper>
            <Decore src={A} top="-10%" left="75%" scaleA={1} scaleB={1} />
            <Decore src={B} top="104%" left="63%" scaleA={-0.6} scaleB={0.6} />
            <Decore src={B} top="-18%" left="0%" scaleA={0.5} scaleB={0.5} />
            <Decore src={B} top="96%" left="0%" scaleA={1} scaleB={1} />
          </QuestCard>}



        {pageNumber == "4" &&
          < Chat >
            <ChatHeader>
              <HeaderImage src={avatar} alt="Avatar" />
              <HeaderText>
                <HeaderTextName>
                  Твой Сашка
                </HeaderTextName>
                <HeaderTextStatus>
                  <p style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0ACF83" }} />
                  Online
                </HeaderTextStatus>
              </HeaderText>
            </ChatHeader>
            <div style={{ flexGrow: "1", overflow: "auto" }}>
              {visible1 && <ChatMessageWrapper>
                <ChatMessage >
                  <ChatMessageText >
                    Моя умничка, ты справилась! Остается только отправить мне кодовое слово и карта твоя.
                  </ChatMessageText>
                </ChatMessage>
                <ChatMessageTime >{date1}</ChatMessageTime>
              </ChatMessageWrapper>}

              {visible33 && <ChatMessageWrapper second>
                <ChatMessage second>
                  <ChatMessageText second>ЛЮБЛЮ</ChatMessageText>
                </ChatMessage>
                <ChatMessageTime second>{date3}<img src={done} alt="done" style={{ width: "13px", height: "8px", padding: "3px" }} /></ChatMessageTime>
              </ChatMessageWrapper>}
              {visible44 && <ChatMessageWrapper>
                <ChatMessage >
                  <ChatMessageText >
                    <img src={Map} alt={"Map"} />
                  </ChatMessageText>

                </ChatMessage>
                <ChatMessageTime >{date2}</ChatMessageTime>
              </ChatMessageWrapper>}
            </div>
            <div>{animation && <PECHAT>{load}</PECHAT>}</div>

            <ChatSend>
              <ChatSendWrapperInput>
                <ChatSendInput onChange={(e) => setInp(e.target.value.toUpperCase())} disabled={visible44} value={inp} />
              </ChatSendWrapperInput>
              <ChatSendBtn src={send} alt="send" onClick={() => {
                if (inp === "ЛЮБЛЮ") {
                  setInp("")
                  setVisible33(true)
                  setDate3(time())
                }

              }} />
            </ChatSend>
          </Chat>}
      </Content>
    </Container >

  );
}

export default App;

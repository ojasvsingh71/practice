// import Profile from "./components/profile_pic";
import People from "./components/data"
import { useState } from "react"
import { motion } from "framer-motion"
import { FaBeer } from "react-icons/fa"
import { FaTrophy } from "react-icons/fa"
import Lottie from "lottie-react"
import Fish_ani from "./lottie_animations/Fish.json"
import Panda_ani from "./lottie_animations/Panda.json"
import Pengiun_ani from "./lottie_animations/Penguin.json"

const Fish = () => <Lottie animationData={Fish_ani} loop={true} style={{
  width: 200,
  height: 200
}} />
const Panda = () => <Lottie animationData={Panda_ani} loop={true} style={{
  width: 200,
  height: 200
}} />
const Pengiun = () => <Lottie animationData={Pengiun_ani} loop={true} style={{
  width: 200,
  height: 200
}} />

const ojasv = {
  name: "Ojasv Singh",
  age: 18,
  pic: "https://hianimez.to/images/discussion.png",
  theme: {
    backgroundColor: "rgb(255, 11, 85)",
    color: "rgb(255, 222, 222)",
    borderRadius: "10%"
  }
}

export default function App() {

  const [index, changeIndex] = useState(0);
  const ismax = index === People.length - 1;
  const [list, changeList] = useState(People)

  function handlenext() {
    if (ismax) {
      changeIndex(0);
    } else {
      changeIndex(index + 1)
    }
  }

  function reverse() {
    const newList = [...list];
    newList.reverse();
    changeList(newList);
    console.log(newList);
  }

  let card = People[index]
  let bg = document.body.style;
  bg.backgroundColor = "rgb(207, 15, 71)";

  return (
    <motion.div style={{
      display: "flex",
      justifyContent: "center",
      cursor: "pointer",
    }} initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    ><Panda />
      <Fish />
      <Pengiun />
      <div style={ojasv.theme}>
        <button onClick={handlenext} style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "15rem"
        }}>NEXT</button>
        <h1>{card.name} <FaBeer /> <FaTrophy /> </h1>
        <img src={card.img} alt={card.name} style={{
          height: "15rem",
          width: "15rem",
          objectFit: "contain"
        }}></img>
        <button onClick={reverse}>Reverse</button>
        {/* {
          People.map((frnd) => {
            return (
              <div key={frnd.id}>
                <h1>{frnd.name}</h1>
                <img src={ojasv.pic} alt={frnd.name}></img>
              </div>
            )
          })
        } */}
      </div>
    </motion.div>
  )
}

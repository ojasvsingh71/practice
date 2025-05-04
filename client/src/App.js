// import Profile from "./components/profile_pic";
import People from "./components/data"
import { useState } from "react"

const ojasv = {
  name: "Ojasv Singh",
  age: 18,
  pic: "https://hianimez.to/images/discussion.png",
  theme: {
    backgroundColor: "black",
    color: "pink",
    display: "inline-block",
  }
}

export default function App() {

  const [index, changeIndex] = useState(0);
  const ismax = index === People.length - 1;

  function handlenext() {
    if (ismax) {
      changeIndex(0);
    } else {
      changeIndex(index + 1)
    }
  }

  let card = People[index]

  return (
    <>
      <div style={ojasv.theme}>
        <button onClick={handlenext}>NEXT</button>
        <h1>{card.name}</h1>
        <img src={ojasv.pic} alt={card.name}></img>

        {
          People.map((frnd) => {
            return (
              <div key={frnd.id}>
                <h1>{frnd.name}</h1>
                <img src={ojasv.pic} alt={frnd.name}></img>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

// import Profile from "./components/profile_pic";
import People from "./components/data"
import { useState } from "react"

const ojasv = {
  name: "Ojasv Singh",
  age: 18,
  pic: "https://hianimez.to/images/discussion.png",
  theme: {
    backgroundColor: "rgb(255, 11, 85)",
    color: "rgb(255, 222, 222)",
    borderRadius:"10%",
    
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
    <div style={{
      backgroundColor: "rgb(207, 15, 71)",
      display:"flex",
      justifyContent:"center"
    }}>
      <div style={ojasv.theme}>
        <button onClick={handlenext} style={{
          justifyContent:"center"
        }}>NEXT</button>
        <h1>{card.name}</h1>
        <img src={card.img} alt={card.name} style={{
          height: "15rem",
          width: "15rem",
          objectFit: "contain"
        }}></img>

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
    </div>
  )
}

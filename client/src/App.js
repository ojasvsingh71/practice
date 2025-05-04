import Profile from "./components/profile_pic";

const ojasv = {
  name: "Ojasv Singh",
  age: 18,
  pic: "https://hianimez.to/images/discussion.png",
  theme: {
    backgroundColor: "black",
    color: "pink",
    display: "inline-block"
  }
}

function App() {
  return (
    <div style={ojasv.theme}>
      <h1>{ojasv.name}</h1>
      <img
        src={ojasv.pic}
        alt={ojasv.name}
      />

    </div >
  )

}

export default App;

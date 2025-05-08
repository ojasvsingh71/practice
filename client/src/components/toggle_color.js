export default function Toggle_BG() {
    function handleClick() {
        let bg = document.body.style;
        console.log(bg.backgroundColor);
        bg.backgroundColor = (bg.backgroundColor === "black") ? "rgb(172, 23, 84)" : "black";
    }

    return (
        <>
            <button onClick={handleClick} style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "15rem"
            }}>
                Toggle Color
            </button>
        </>
    )
}
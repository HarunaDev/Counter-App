export default function Guess() {
    function handleClick() {
        let randomNum = Math.floor(Math.random() * 5) + 1
        let userInput = prompt('type a number');
        alert(`computer number: ${randomNum}, Your guess: ${userInput}`)
    }
    return (
        <div className="section">
            <h1>Guess A Number</h1>
            <button onClick={handleClick}>Guess a number between 1 & 5</button>
        </div>
    )
}
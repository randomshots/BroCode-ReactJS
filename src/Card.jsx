// import profilePic from './assets/realistic_image.png'
import broCodeImage from './assets/Bro Code Image.jpg'

function Card() {

    return (
        <div className = "card">
            <img className = "cardImage" src = {broCodeImage} alt = "Profile Picture"></img>
            <h2 className = "card-title">Bro Code</h2>
            <p className = "card-text">One of the best youtubers out there with really good courses</p>
        </div>
    );
}

export default Card
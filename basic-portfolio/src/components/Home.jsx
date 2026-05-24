import "./Home.css";
import images from "../assets/image.jpg";
function Home() {
  return (
    <>
      <div className="home">
        <img src={images} className="image"/>
        <h2>Hello World! 🌍</h2>
        <p>
          Hi, I’m <strong>Maithily Kawale</strong>, a student passionate about learning and
          growing in the world of <span>technology</span>.
        </p>
      </div>
    </>
  );
}

export default Home;
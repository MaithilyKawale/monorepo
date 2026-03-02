import "./About.css";


function About() {
  return (
    <>
      <section className="Intro-container">
        <h2>ℹ️Introduction</h2>
        <ul>
          <li>
            My name is <strong>Maithily Subhash Kawale</strong> from{" "}
            <em><u>Lakhani</u></em>.
          </li>
          <li>I am <strong>21 years old</strong> and have a <u>strong academic background</u>.</li>
          <li>I am currently studying at <strong><em>GH Raisoni College of Engineering (GHRCE), Nagpur</em></strong>.</li>
          <li>
            I completed my 10<sup>th</sup> grade from <strong><em>UEMS</em></strong> with an impressive score of{" "}
            <u><em>93%</em></u>.
          </li>
          <li>
            After that, I pursued my 12<sup>th</sup> education at <strong><em>Samarth Mahavidyalay</em></strong>, where I secured{" "}
            <u><em>73%</em></u>.
          </li>
        </ul>
      </section>

      <section className="about-container">
        <h2>
          🙋‍♀️About Me
        </h2>
        <ul>
          <li>
            <strong>Hobbies:</strong> Travelling, exploring new places and things, dancing, <del>watching TV</del>, reading books.
          </li>
          <li><strong>Strengths:</strong> Quick learner, punctual, responsible.</li>
          <li><strong>Weaknesses:</strong> Overthinking, impatience, short tempered.</li>
        </ul>
      </section>

      <section className="thoughts-container">
        <h2>
          💭My thoughts
        </h2>
        <ul>
          <li>
            I have a keen interest in <em>learning new technologies</em>, and currently I am focusing on <u>learning HTML to build my skills in web development</u>.
          </li>
          <li>
            I believe in <u>continuous learning</u> and always try to give my best in whatever I do. This project reflects my understanding and effort in HTML and I hope it adds value to my learning journey.
          </li>
        </ul>
      </section>
    </>
  );
}

export default About;
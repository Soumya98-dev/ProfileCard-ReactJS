import './App.css';
import myPic from './assets/WhatsApp Image 2024-03-06 at 12.35.11 AM.jpeg';

const skills = [
  {
    name: "HTML + CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    name: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    name: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    name: "Git & GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    name: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    name: "Java",
    level: "advanced",
    color: "#FF3B00"
  },
  {
    name: "Spring Boot",
    level: "beginner",
    color: "#60DAFB"
  }
];

const levelEmoji = {
  beginner: "👶🏻",
  intermediate: "👍",
  advanced: "💪"
}

function Skill({keyName, name, color, level}){
  return(
      <span key={keyName} className='skill' style={{background: color}}>{name} {levelEmoji[level]}</span>
  );
};


function App() {
  return (
   <div className='main-container'>
    <div className='image'>
      <img src={myPic} alt="" />
    </div>
    <div className='my-name'>
      <h1>Soumyadeep(Deep) Chatterjee</h1>
    </div>
    <div className='about'>
      <p>Full-Stack Software Engineer building scalable applications with Java, Spring Boot, React, and TypeScript. Skilled
in the end-to-end development of user-centric, high-performance solutions.</p>
    </div>
    <div className='skills'>
      <div className='skills-box'>
        {
          skills.map(skill => (
            <Skill
              key = {skill.name}
              name = {skill.name}
              color = {skill.color}
              level = {skill.level}
            />
          ))
        }
      </div>
    </div>
   </div>
  );
}

export default App;

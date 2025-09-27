import './App.css';
import myPic from './assets/WhatsApp Image 2024-03-06 at 12.35.11 AM.jpeg';

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
        <span className='skill html'>HTML + CSS 💪</span>
        <span className='skill js'>JavaScript 💪</span>
        <span className='skill web'>Web Design 💪</span>
        <span className='skill git'>Git & GitHub 👍</span>
        <span className='skill react'>React 💪</span>
        <span className='skill java'>Java 💪</span>
      </div>
    </div>
   </div>
  );
}

export default App;

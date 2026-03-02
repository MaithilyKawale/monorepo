import { createRoot } from 'react-dom/client';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';


function App() {
  const headingStyle = {
    textAlign: 'center',
    color: 'black'
  };

  const navStyle = {
    textAlign: 'center',
    fontSize: '20px',
    marginBottom: '10px',
    padding: '10px'
  };
  
  const path = window.location.pathname;
  let component;

  if (path === '/') {
    component = <Home />;
  } else if (path === '/about') {
    component = <About />;
  } else if (path === '/contact') {
    component = <Contact />;
  } else {
    component = <h2>404 Page Not Found</h2>;
  }

  return (
    <>
      <h1 style={headingStyle}>Welcome to My App</h1>
      <nav style={navStyle}>
        <a href="/">Home</a> |
        <a href="/about">About</a> |
        <a href="/contact">Contact</a>
      </nav>
      <hr />
      {component}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);


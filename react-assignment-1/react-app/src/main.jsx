import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Card from './components/card.jsx'
import image1 from './assests/image1.jpg';
import image2 from './assests/image2.jpg';
import Footer from './components/footer.jsx';

createRoot(document.getElementById('root')).render(
  <>
 <Header title='Welcome to my app'/>
 <div>
 <Card name="Maithily" description="React developer" imageUrl={image1}/>
 <Card name="Sunita" description="Frontend developer" imageUrl={image2}/>
 </div>
 <Footer year={2024}/>
</>
)

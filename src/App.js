import './App.css';
import GallaryFooter from './components/GallaryFooter';
import CompHead from './components/GHeader';
import CompBody from './components/Gbody';
import imageData from './components/compData';


function App() {
  return (
    <div>
      <CompHead/>
      <CompBody image = {imageData}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;

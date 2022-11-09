import cardStyle from './App.module.css';
import CardContent from './Components/CardContent';
import CardAuthor from './Components/CardAuthor';
import CardStatus from './Components/CardStatus';

function App() {
  return (
  <div className={cardStyle.card}>
      <div className={cardStyle.cardContainer}>
            <CardContent />
            <CardStatus />
            <CardAuthor />
      </div>    
  </div>
  );
}

export default App;

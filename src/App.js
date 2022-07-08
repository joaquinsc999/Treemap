import './App.css';
import { Treemap } from './ui/Treemap';

function App() {

  const treemapData = [
    {
      x: "Champions",
      y: 218,
    },
    {
      x: "Loyal Customers",
      y: 149,
    },
    {
      x: "Need Attention",
      y: 184,
    },
    {
      x: "About to Sleep",
      y: 55,
    },
    {
      x: "Promising",
      y: 84,
    },
    {
      x: "Potential Loyalist",
      y: 31,
    },
    {
      x: "New Customers",
      y: 70,
    },
    {
      x: "Lost",
      y: 70,
    },
    {
      x: "Hibernating",
      y: 70,
    },
    {
      x: "At Risk",
      y: 70,
    },
    {
      x: "Can't Lose Them",
      y: 70,
    }
  ]


  return (
    <div className="App">
      <Treemap treemapData={treemapData} width={500}/>
    </div>
  );
}

export default App;

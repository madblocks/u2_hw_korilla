import React, {useState} from 'react';
import './App.css';
import Receipt from './components/Receipt'


const _receipts = [
  {
    id: 1,
    person: 'Jeremy',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Korchata',
      cost: 22,
    },
    paid: false,
  },
  {
    id: 2,
    person: 'Tiffany',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: 'Brittany',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
    },
    paid: false,
  },
];

function App() {

  const [receipts, setReceipts] = useState(_receipts)

  return (
    <div>
      <header>
        <h1 className="name">Korilla</h1>
      </header>
      <main className="receiptContainer">
        <React.StrictMode>
          {receipts.map((receipt) => {
            if (!receipt.paid) {
              return <Receipt key={receipt.id} receipt={receipt}/>
            } else {
              return null
            }
          })}
        </React.StrictMode>
      </main>
    </div>
  )
}

export default App;

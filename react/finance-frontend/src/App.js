import { useState } from 'react'
import TransactionList from "./components/TransactionList"
import TransactionCreate from "./components/TransactionCreate"
import './App.css';

const mockCustomers = [
  { id: 1, name: "Plug" },
  { id: 2, name: "Danny" },
  { id: 3, name: "Jackson" },
];

const mockTransactions = {
  1: [
    { id: 1, created: "01/01/2024 - 10:00", type: "income", amount: 50000, note: "Salary" },
    { id: 2, created: "01/05/2024 - 14:30", type: "expense", amount: 1500, note: "Lunch" },
  ],
  2: [
    { id: 3, created: "01/02/2024 - 09:00", type: "income", amount: 30000, note: "Freelance" },
    { id: 4, created: "01/03/2024 - 16:00", type: "expense", amount: 5000, note: "Shopping" },
  ],
  3: [
    { id: 5, created: "01/04/2024 - 11:00", type: "income", amount: 20000, note: "Bonus" },
  ],
};

function App() {
  const [transactionData, setTransactionData] = useState([]);

  const handleCustomerChanged = (customerId) => {
    setTransactionData(mockTransactions[customerId] || []);
  }

  const handleAddTransaction = (data) => {
    const newTransaction = {
      id: transactionData.length + 1,
      created: new Date().toLocaleString(),
      ...data
    };
    setTransactionData([...transactionData, newTransaction]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <select onChange={(e) => handleCustomerChanged(e.target.value)}>
          <option value="">Select Customer</option>
          {mockCustomers.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <TransactionCreate onSubmit={handleAddTransaction}/>
        <TransactionList data={transactionData}/>
      </header>
    </div>
  );
}

export default App;

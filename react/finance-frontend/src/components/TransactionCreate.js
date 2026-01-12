import { useState } from 'react';

export default function TransactionCreate(props) {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    if (!amount) return;
    props.onSubmit({
      type,
      amount: Number(amount),
      note
    });
    setAmount("");
    setNote("");
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px'}}>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">INCOME (รายรับ)</option>
        <option value="expense">EXPENSE (รายจ่าย)</option>
      </select>
      <input
        type="number"
        placeholder="จำนวนเงิน"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Transaction</button>
    </div>
  )
}

import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTranscation] = useState([])
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
    .then(r =>r.json())
    .then( (data) => setTranscation(data))
  }, [])


  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList arrayOfAllTransactions={transactions} />
    </div>
  );
}

export default AccountContainer;

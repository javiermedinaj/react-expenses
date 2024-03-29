import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
    </GlobalProvider>
  )
}

export default App
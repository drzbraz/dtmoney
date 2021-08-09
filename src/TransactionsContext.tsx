import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
  id: number
  type: string
  title: string
  amount: number
  category: string
  createdAt: string
}

interface TransactionProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext<Transaction[]>([])
export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions').then((response) => setTransaction(response.data.transactions))
  }, [])

  return <TransactionsContext.Provider value={transactions}> {children}</TransactionsContext.Provider>
}

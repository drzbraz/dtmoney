import { useContext } from 'react'
import { Container } from './styles'
import { TransactionsContext } from '../../TransactionsContext'
interface Transaction {
  id: number
  type: string
  title: string
  amount: number
  category: string
  createdAt: string
}
export function TransactionsTable() {
  const transactions = useContext(TransactionsContext)
  console.log(`transactions`, transactions)
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
function TransactionContext(TransactionContext: any) {
  throw new Error('Function not implemented.')
}

import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'

Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setisNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  )
}

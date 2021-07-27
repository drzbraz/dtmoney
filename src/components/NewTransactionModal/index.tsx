import Modal from 'react-modal'

import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <RadioBox type="button" isActive={type === 'deposit'} onClick={() => setType('deposit')}>
            <img src={incomeImg} alt="" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type="button" isActive={type === 'withdraw'} onClick={() => setType('withdraw')}>
            <img src={outcomeImg} alt="" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="number" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}

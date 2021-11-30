import Container from '@components/atoms/Container'
import React from 'react'
import styles from './styles.module.scss'

const HeaderPublic = () => {
  return (
    <header className={styles.header}>
      <Container>
        <p>menu đây</p>
      </Container>
    </header>
  )
}

export default HeaderPublic

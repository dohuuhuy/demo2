import { Container } from '@src/components/atoms/Container'
import React from 'react'
import styles from './styles.module.less'

const HeaderPublic = () => {
  return (
    <header className={styles.header}>
      <Container>
        <p>menu</p>
      </Container>
    </header>
  )
}

export default HeaderPublic

import Container from '@components/atoms/Container'
import { Button, Card } from 'antd'
import React from 'react'
import styles from './styles.module.less'

const HeaderPublic = () => {
  return (
    <header className={styles.header}>
      <Container>
        <h1>menu</h1>
        <p>menu đây</p>
      </Container>
      <input type='text' placeholder='helo' name='fullname' />
      <Button color='primary'>hello</Button>
      <Card
        title='Default size card'
        extra={<a href='#'>More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </header>
  )
}

export default HeaderPublic

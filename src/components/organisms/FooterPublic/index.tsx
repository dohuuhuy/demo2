import Container from '@components/atoms/Container'
import { Row, Col } from 'antd'
import React from 'react'
import styles from './styles.module.scss'

const FooterPublic = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col xl={24}>helo</Col>
        </Row>
        <Row>
          <Col xl={24}>
            <p>
              @ Coppy rigt by{' '}
              <a href='https://huyi.tk' target='_blank' rel="noreferrer">
                Huyi
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterPublic

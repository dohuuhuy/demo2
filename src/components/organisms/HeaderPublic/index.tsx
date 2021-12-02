import { Container } from '@components/atoms/Container'
import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import { listMenu } from './common/func'
import styles from './styles.module.less'

const HeaderPublic = () => {
  return (
    <Container tag='header' fluid fixed className={styles.header}>
      <Container className={styles.conHeader}>
        <Row className={styles.rowMenu}>
          <Col xl='6' className={styles.colLogo}>
            <figure>
              <img src='/images/logo/logoBranch.png' alt='Logo branch' />
            </figure>
          </Col>
          <Col xl='18' className={styles.colListMenu}>
            <ul className={styles.listMenu}>
              {listMenu.map((v, i) => {
                return (
                  <li key={i}>
                    <Link href={v.slug}>
                      <a>{v.label}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default HeaderPublic

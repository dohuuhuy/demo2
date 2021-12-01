import { Container } from '@src/components/atoms/Container'
import { Col, Row } from 'antd'
import { uniqueId } from 'lodash'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.less'

const HeaderPublic = () => {
  return (
    <Container tag='header' fluid fixed className={styles.header}>
      <Container className={styles.conHeader}>
        <Row className={styles.rowMenu}>
          <Col xl='6' className={styles.colLogo}>
            <figure>
              <img src='/images/logo/logo.jpg' alt='Logo branch' />
            </figure>
          </Col>
          <Col xl='18' className={styles.colListMenu}>
            <ul className={styles.listMenu}>
              {menu.map((v) => {
                return (
                  <li key={uniqueId()}>
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

const menu = [
  {
    slug: '/',
    label: 'Home',
    status: true,
    sort: 1
  },
  {
    slug: '/about',
    label: 'About',
    status: true,
    sort: 2
  },
  {
    slug: '/features',
    label: 'Features',
    status: true,
    sort: 3
  },
  {
    slug: '/services',
    label: 'Services',
    status: true,
    sort: 4
  },
  {
    slug: '/contact',
    label: 'Contact',
    status: true,
    sort: 5
  }
]

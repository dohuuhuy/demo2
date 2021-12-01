import { Container } from '@src/components/atoms/Container'
import { Col, Row } from 'antd'
import React from 'react'
import styles from './styles.module.less'
import cx from 'classnames'

const About = () => {
  return (
    <Container tag='section' fluid className={styles.About}>
      <Container className={styles.conAbout}>
        <Row className={styles.rowAbout}>
          <Col xl={10} lg={10} md={10} className={styles.colImage}>
            <ul className={styles.listImageAbout}>
              {listImageAbout.map((v, i) => {
                return (
                  <li key={i} className={cx(styles['item_' + i], styles.item)}>
                    <figure>
                      <img src={v.img} alt='About' />
                    </figure>
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col xl={14} lg={14} md={14} className={styles.colCard}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <h1>About us of Trực</h1>
                <h3>TRực sẽ đấm nếu không mua, đừng có nhờn ^^</h3>
                <p>Nếu còn cố chấp tôi sẽ gọi bảo vệ</p>
                <button className={styles.btn}>
                  <span>Mua đi nhìn nữa !</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default About

const listImageAbout = [
  {
    img: '/images/about/1.png'
  },
  {
    img: '/images/about/2.png'
  },
  {
    img: '/images/about/3.png'
  }
]

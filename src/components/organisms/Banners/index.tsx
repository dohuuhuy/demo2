import { Container } from '@src/components/atoms/Container'
import { Col, Row } from 'antd'
import React from 'react'
import styles from './styles.module.less'

const Banners = () => {
  return (
    <Container tag='section' fluid className={styles.Banners} id='About'>
      <Container className={styles.conBanners}>
        <Row className={styles.rowBanners}>
          <Col xl={12} lg={12} md={12} className={styles.colCardBanner}>
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <h1>Wellcome home by HUyi</h1>
                <h3>
                  Đã đến với bạn thì bạn phải mua cái gì mang về, không thể tay
                  không được @@
                </h3>
                <p>Nếu còn cố chấp tôi sẽ gọi bảo vệ</p>
                <button className={styles.btn}>
                  <span>Mua đi</span>
                </button>
              </div>
            </div>
          </Col>
          <Col xl={12} lg={12} md={12} className={styles.colImageBanner}>
            <figure>
              <img src='/images/banner/BannerHome.png' alt='banners' />
            </figure>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Banners

import { Container } from '@src/components/atoms/Container'
import React from 'react'
import styles from './styles.module.less'
import cx from 'classnames'
import { Row, Col } from 'antd'

const FooterPublic = () => {
  return (
    <Container tag='footer' fluid className={styles.Footer}>
      <Container className={styles.conFooter}>
        <Row className={styles.rowCopyRight}>
          <Col span={24} className={styles.colFCopyRight}>
            <p className={styles.txtCopyRight}>COppy rigght by HUyi @ 2021</p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default FooterPublic

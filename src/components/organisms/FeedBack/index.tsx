import { Container } from '@src/components/atoms/Container'
import { openToast } from '@src/utils/Notification'
import { Col, Row } from 'antd'
import React from 'react'
import { listForm } from './common/func'
import styles from './styles.module.less'

const FeedBack = () => {
  const onSubmit = (e: any) => {
    e.preventDefault()
    openToast({
      type: 'success',
      message: 'Cảm ơn bạn đã gửi phản hồi này - feedback message',
      description: (
        <>
          <p>
            Chúng tôi sẽ ghi nhận và phản hồi lại cho bạn trong thời gian sớm
            nhất !
          </p>
          <p>We will acknowledge and respond to you as soon as possible!</p>
        </>
      )
    })
  }
  return (
    <Container tag='section' fluid className={styles.FeedBack}>
      <Container className={styles.conFeedBack}>
        <Row className={styles.rowFeedBack}>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className={styles.colCard}
          >
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <h1>About us of Trực</h1>
                <h3>TRực sẽ đấm nếu không mua, đừng có nhờn ^^</h3>
                <p>Nếu còn cố chấp tôi sẽ gọi bảo vệ</p>
              </div>
            </div>
          </Col>
          <Col
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className={styles.colForm}
          >
            <form className={styles.form} onSubmit={onSubmit}>
              <ul className={styles.listForm}>
                {listForm?.map((v, i) => {
                  const propsInput = { ...v }
                  delete propsInput.enter

                  return (
                    <li key={i} className={styles.itemForm}>
                      <div className={styles.formInput}>
                        {v?.enter(propsInput)}
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className={styles.groupBtn}>
                <button className={styles.btnSubmit} type='submit'>
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default FeedBack

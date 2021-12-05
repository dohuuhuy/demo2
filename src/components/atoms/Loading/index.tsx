import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import cx from 'classnames'
import React from 'react'
import styles from './styles.module.less'

export interface Loading {
  text?: string
  component?: boolean
  top?: boolean
}

const Loading = (props: Loading): JSX.Element => {
  const {
    text = 'Vui lòng chờ trong giây lát ...',
    component = false,
    top = false
  } = props

  const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin={true} />

  return (
    <div
      className={cx(
        component ? styles.componentLoading : styles.pageLoading,
        top && styles.top
      )}
    >
      <Spin indicator={antIcon} />
      <div className={styles.content}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Loading

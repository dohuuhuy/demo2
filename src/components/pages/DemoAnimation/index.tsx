import { Container } from '@src/components/atoms/Container'
import styles from './styles.module.less'
export const DemoAnimation = () => {
  return (
    <Container tag='section' className={styles.conDemo}>
      <div className={styles.helicopter}>
        <div className={styles.cockpit}></div>
        <div className={styles.tail}></div>
        <div className={styles.main}></div>
        <div className={styles.rotor}>
          <div className={styles.rotator}>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  )
}

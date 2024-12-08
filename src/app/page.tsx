import styles from './home.module.css'
import Button from './ui/Button'
const Home = () => {
  return (
    <div className={styles.acceuil}>
      <h1 className='font-bold'>Bienvenu !</h1>

      <div>
        <Button />
      </div>
    </div>
  )
}

export default Home

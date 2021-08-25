import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis perferendis, nesciunt aliquid ipsam cupiditate quis unde asperiores voluptas, sapiente magnam voluptatibus reprehenderit dolor eligendi voluptatum porro. Officiis ex earum delectus?</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt qui quod aut laboriosam eum nostrum nemo aspernatur. Nemo nostrum repellendus enim molestiae alias eum assumenda delectus optio neque architecto.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  )
}

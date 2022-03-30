import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Link href={`/posts/`}>
        <a>
          <h2 className="p-4">Artigos</h2>
        </a>
      </Link>
    </>
  )
}

export default Home

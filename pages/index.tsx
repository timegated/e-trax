import Head from 'next/head'
import GradientLayout from '../components/GradientLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <GradientLayout
      color="red"
    >
      <h1>home</h1>
    </GradientLayout>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={`
      flex justify-center h-screen items-center
      bg-gradient-to-r from-gray-500 to-gray-700
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <span>Content</span>  
      </Layout>
    </div>
  )
}

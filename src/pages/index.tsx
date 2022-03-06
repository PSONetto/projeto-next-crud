import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'

export default function Home() {
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4')
  ]
  return (
    <div className={`
      flex justify-center h-screen items-center
      bg-gradient-to-r from-gray-500 to-gray-700
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table clients={clients}></Table> 
      </Layout>
    </div>
  )
}

import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import Button from '../components/Button'
import Form from '../components/Form'

export default function Home() {
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4')
  ]

  function selectedClient(client: Client) {
    console.log(`Selecionando ${client.name}`)
  }

  function deletedClient(client: Client) {
    console.log(`Deletando ${client.name}`)
  }

  return (
    <div className={`
      flex justify-center h-screen items-center
      bg-gradient-to-r from-blue-400 to-blue-800
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <div className='flex justify-end'>
          <Button color='green' className='mb-4'>Novo Cliente</Button>
        </div>
        <Table clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        />
        <Form client={clients[0]}/>
      </Layout>
    </div>
  )
}

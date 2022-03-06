import Client from "../core/Client"
import { EditIcon, DeleteIcon } from "./Icons"

interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {
    const showActions = props.deletedClient || props.selectedClient
    function renderHeader() {
        return (
            <tr>
                <th className="text-left py-2 px-4">Código</th>
                <th className="text-left py-2 px-4">Nome</th>
                <th className="text-left py-2 px-4">Idade</th>
                {renderActions ? <th className="py-2 px-4">Ações</th> : false}
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                    <td className="text-left py-2 px-4">{client.id}</td>
                    <td className="text-left py-2 px-4">{client.name}</td>
                    <td className="text-left py-2 px-4">{client.age}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="flex justify-center">
                {props.selectedClient ? (
                    <button onClick={() => props.selectedClient?.(client)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-blue-50
                    `}>
                        {EditIcon}
                    </button>
                ) : false}
                {props.deletedClient ? (
                    <button onClick={() => props.deletedClient?.(client)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-blue-50
                    `}>
                        {DeleteIcon}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-200
                bg-gradient-to-r from-blue-500 to-blue-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}
import Client from "../core/Client"

interface TableProps {
    clients: Client[]
}

export default function Table(props: TableProps) {
    function renderHeader() {
        return (
            <tr>
                <th className="text-left py-2 px-4">Código</th>
                <th className="text-left py-2 px-4">Nome</th>
                <th className="text-left py-2 px-4">Idade</th>
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
                </tr>
            )
        })
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
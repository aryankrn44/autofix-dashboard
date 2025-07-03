import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Home() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    fetchLogs()
  }, [])

  async function fetchLogs() {
    const { data, error } = await supabase
      .from('agent_logs')
      .select('*')
      .order('timestamp', { ascending: false })

    if (error) console.error(error)
    else setLogs(data)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Agent Logs</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Device ID</th>
            <th className="p-2 border">Fix</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i}>
              <td className="p-2 border">{log.device_id}</td>
              <td className="p-2 border">{log.fix}</td>
              <td className="p-2 border">{log.status}</td>
              <td className="p-2 border">
                {new Date(log.timestamp).toLocaleString('en-IN', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

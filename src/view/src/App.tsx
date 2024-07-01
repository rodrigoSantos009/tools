import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { api } from './lib/axios'

interface ToolsProps {
  title: string,
  link: string,
  description: string,
  tags: string[]
}[]

function App() {
  const [tools, setTools] = useState<ToolsProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await api.get("tools");
      console.log(response.data)
      setTools(response.data);
    } catch (error) {
      console.error("Error fetching tools data: ", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      {tools.map(item => (
        <div key={item.title}>
          {item.title}
          {item.description}
          {item.link}
          {item.tags.map(tag => (
            <div>
              {tag}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default App

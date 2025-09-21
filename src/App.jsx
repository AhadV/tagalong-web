import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { HelmetProvider } from 'react-helmet-async'
import MicrosoftClarity from "@/components/MicrosoftClarity"

function App() {
  return (
    <HelmetProvider>
      <MicrosoftClarity />
      <Pages />
      <Toaster />
    </HelmetProvider>
  )
}

export default App 
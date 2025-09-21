import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { HelmetProvider } from 'react-helmet-async'
import MicrosoftClarity from "@/components/MicrosoftClarity"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import ClickFraudProtection from "@/components/ClickFraudProtection"

function App() {
  return (
    <HelmetProvider>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <ClickFraudProtection />
      <Pages />
      <Toaster />
    </HelmetProvider>
  )
}

export default App 
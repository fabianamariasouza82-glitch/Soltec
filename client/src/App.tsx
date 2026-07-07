import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SEOHead from "./components/SEOHead";
import WhatsAppButton from "./components/WhatsAppButton";
import ManutencaoEletricaIndustrial from "./pages/ManutencaoEletricaIndustrial";
import InstalacaoEletricaPredial from "./pages/InstalacaoEletricaPredial";
import ManutencaoEletricaComercial from "./pages/ManutencaoEletricaComercial";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/manutencao-eletrica-industrial-campinas"} component={ManutencaoEletricaIndustrial} />
      <Route path={"/instalacao-eletrica-predial-campinas"} component={InstalacaoEletricaPredial} />
      <Route path={"/manutencao-eletrica-comercial-campinas"} component={ManutencaoEletricaComercial} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <SEOHead />
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

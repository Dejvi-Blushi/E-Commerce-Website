import AppRoutes from "./routes/AppRoutes";
import {useAppState} from "./state/useAppState";

export default function App() {
  const appState = useAppState();

  return <AppRoutes {...appState} />;
}

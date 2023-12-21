import Layout from "./Layout";
import "./styles.css";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
      >
        <Layout />
      </SnackbarProvider>
    </>
  );
}
export default App;

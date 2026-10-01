import Button from "./Button"
import { FcGoogle } from "react-icons/fc";

const App = () => {
  return (
    <>
      <Button onClick={() => console.log('Logging in...')} variant="google">
        <FcGoogle size={24} />
        Log in with Google
      </Button>
    </>
  )
}

export default App
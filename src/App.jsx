import Avatar from "./Avatar"
import Button from "./Button"
import Navbar from "./Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Button onClick={() => console.log('Logging in...')} variant="google">
        Log in with Google
      </Button>
      <Avatar />
    
    </>
  )
}

export default App
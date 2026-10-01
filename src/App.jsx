import Avatar from "./Avatar"
import Button from "./Button"

const App = () => {
  return (
    <>
      <Button onClick={() => console.log('Logging in...')} variant="google">
        Log in with Google
      </Button>
      <Avatar />
    </>
  )
}

export default App
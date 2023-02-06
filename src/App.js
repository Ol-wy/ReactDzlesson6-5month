// import SignInPage from "./components/SignInPage"
import {signInWithGoogle } from './firebase'


function App() {
  return (
    <div>
      <button onClick={signInWithGoogle}> Sign in With Google</button>
    </div>
  );
}

export default App;

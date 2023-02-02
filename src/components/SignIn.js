import { signInWithGoogle } from '../datasources/firebase';

function SignIn (){
    return(
        <>
        <button type="submit" value="Submit Form">SIGN IN</button>
        <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
        </>
    )
}

export default SignIn;
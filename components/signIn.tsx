import { Button } from './ui/button'
import { SignUpButton } from '@clerk/nextjs'

const SignIn = () => {
  return (
        <SignUpButton mode='modal'>
            <Button variant="secondary">Sign Up</Button>
        </SignUpButton>
  )
}

export default SignIn

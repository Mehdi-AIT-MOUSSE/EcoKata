import { UserPlus } from 'lucide-react'
import { Button } from './ui/button'
import { SignUpButton } from '@clerk/nextjs'

const SignIn = () => {
  return (
        <SignUpButton mode='modal'>
            <Button variant="secondary"><span className='hidden md:block'>Sign Up</span><UserPlus /></Button>
        </SignUpButton>
  )
}

export default SignIn

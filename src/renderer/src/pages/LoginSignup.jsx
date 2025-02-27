import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TextInput } from '@mantine/core'
import { PasswordInput } from '@mantine/core'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { CiAt } from 'react-icons/ci'
import supabase from '../supabase'

function LoginSignup() {
  const [hasUser, setHasUser] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const atIcon = <CiAt />

  console.log(username, email, password)

  return (
    <section>
      <Title order={1}>{hasUser ? 'Login' : 'Signup'}</Title>
      <form>
        <TextInput
          label="Username"
          withAsterisk
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <TextInput
          withAsterisk
          rightSectionPointerEvents="none"
          rightSection={atIcon}
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <PasswordInput
          label="Password"
          withAsterisk
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button>{hasUser ? 'Login' : 'Create account'}</button>
      </form>
      <Text>Already have an account?</Text>
    </section>
  )
}

export default LoginSignup

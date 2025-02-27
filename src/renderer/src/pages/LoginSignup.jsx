//import { useState } from 'react'
import { TextInput, PasswordInput, Title, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { CiAt } from 'react-icons/ci'
//import supabase from '../supabase'

function LoginSignup() {
  //const [hasUser, setHasUser] = useState(false)
  let hasUser = ''
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', email: '', password: '' },
    validate: {
      username: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 8 ? 'Password must be at least 8 characters long' : null)
    }
  })

  const atIcon = <CiAt />

  return (
    <section>
      <Title order={1}>{hasUser ? 'Login' : 'Signup'}</Title>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Username"
          withAsterisk
          placeholder="your username"
          key={form.key('username')}
          {...form.getInputProps('username')}
        />
        <TextInput
          withAsterisk
          rightSectionPointerEvents="none"
          rightSection={atIcon}
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          withAsterisk
          placeholder="your password"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />
        <button type="submit">{hasUser ? 'Login' : 'Create account'}</button>
      </form>
      <Text>
        {hasUser ? "Don't have an account?" : 'Already have an account?'}{' '}
        <span>{hasUser ? 'Signup' : 'Login'}</span>
      </Text>
    </section>
  )
}

export default LoginSignup

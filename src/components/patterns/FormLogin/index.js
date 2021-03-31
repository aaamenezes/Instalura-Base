import React from 'react'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { Button } from '../../commons/Button'
import TextField from '../../forms/TextField'
import useForm from '../../../infra/hooks/forms/useForm'
import { loginService } from '../../../services/login/loginService'

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('Usuário é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .required('Senha é obrigatório')
    .min(8, 'Preencha ao menos 8 caracteres')
})

export default function LoginForm() {
  const initialValues = {
    usuario: '',
    senha: ''
  }

  const router = useRouter()

  const form = useForm({
    initialValues,
    onSubmit: values => {
      form.setIsFormDisabled(true)
      loginService.login({
        username: values.usuario, // omariosouto
        password: values.senha // senhasegura
      })
        .then(() => router.push('/app/profile'))
        .catch(error => console.error('error', error))
        .finally(() => form.setIsFormDisabled(true))
    },
    async validateSchema(values) {
      return loginSchema.validate(values, { abortEarly: false })
    }
  })

  return (
    <form id='formCadastro' onSubmit={form.handleSubmit}>
      <TextField
        placeholder='Usuário'
        name='usuario'
        value={form.values.usuario}
        isTouched={form.touched.usuario}
        error={form.errors.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder='Senha'
        name='senha'
        type='password'
        value={form.values.senha}
        isTouched={form.touched.senha}
        error={form.errors.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />

      <Button
        type='submit'
        variant='secondary.medium'
        margin={{
          xs: '0 auto',
          md: 'initial'
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
      {/* <pre>
        {JSON.stringify(form.touched, null, 4)}
      </pre> */}

    </form>
  )
}

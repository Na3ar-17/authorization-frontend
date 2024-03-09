'use client'
import { KEYS } from '@/api/keys'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import styles from './AuthForm.module.scss'

interface iProps {
  formType: 'login' | 'register'
}

const AuthForm: NextPage<iProps> = ({ formType }) => {
  const { register, handleSubmit, reset } = useForm<IAuthForm>({
    mode: 'onChange',
  })

  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: [KEYS.AUTH],
    mutationFn: (data: IAuthForm) => authService.main(formType, data),
    onSuccess: () => {
      reset()
      toast.success('Successfuly login')
      push('/')
    },
  })

  const onSubmit: SubmitHandler<IAuthForm> = (values) => {
    mutate(values)
  }

  const formTitle = `${formType.charAt(0).toUpperCase()}${formType.slice(1)}`

  return (
    <main className={styles.main}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: formType == 'login' ? '350px' : '380px' }}
        className={styles.form}
      >
        <div className={styles.content}>
          <div className={styles.title}>{formTitle}</div>
          <div className={styles['input-container']}>
            <input
              type="text"
              placeholder="Enter email"
              className={styles.input}
              {...register('email', { required: true })}
            />
          </div>
          <div className={styles['input-container']}>
            <input
              type="password"
              placeholder="Enter password"
              className={styles.input}
              {...register('password', { required: true })}
            />
          </div>
          {formType === 'register' ? (
            <div className={styles['input-container']}>
              <input
                type="text"
                placeholder="Enter name"
                className={styles.input}
                {...register('name')}
              />
            </div>
          ) : (
            ''
          )}
          <div>
            <button
              type="submit"
              className="bg-border text-white px-8 cursor-pointer py-2 rounded-md"
            >
              {formType}
            </button>
          </div>
        </div>
        <p className="text-sm text-blue-800 underline text-center mt-8">
          <Link
            href={
              formType == 'login'
                ? DASHBOARD_PAGES.REGISTER
                : DASHBOARD_PAGES.LOGIN
            }
          >
            {formType == 'login' ? 'Register' : 'Login'}
          </Link>
        </p>
      </form>
    </main>
  )
}

export default AuthForm

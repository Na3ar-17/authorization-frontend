'use client'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { NextPage } from 'next'
import Link from 'next/link'

interface iProps {
  formType: 'login' | 'register'
}

const AuthForm: NextPage<iProps> = ({ formType }) => {
  const formTitle = formType.charAt(0).toUpperCase() + formType.slice(1)
  return (
    <main className="h-screen w-full grid place-items-center">
      <form
        style={{ width: formType == 'login' ? '350px' : '380px' }}
        className="bg-[#222]  w-[400px] rounded-md flex flex-col p-6 border-border border-solid"
      >
        <div>
          <div className="text-center text-2xl mb-8">{formTitle}</div>
          <div className="mb-5">
            <input
              type="text"
              placeholder="Enter email"
              className="w-full px-3 py-2 border rounded-md bg-sidebar text-white"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border rounded-md bg-sidebar text-white"
            />
          </div>
          {formType === 'register' ? (
            <div className="mb-5">
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-3 py-2 border rounded-md bg-sidebar text-white"
              />
            </div>
          ) : (
            ''
          )}
          <div>
            <button className="bg-border text-white px-8 cursor-pointer py-2 rounded-md">
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

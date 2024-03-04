import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { NextPage } from 'next'
import Link from 'next/link'

const NavBar: NextPage = () => {
  return (
    <nav className="bg-sidebar py-5">
      <ul className="grid grid-cols-2">
        <div className="text-xl pl-4">Middle Level Authorization</div>
        <div className="flex gap-3 justify-end pr-8">
          <li>
            <Link className="cursor-pointer " href={DASHBOARD_PAGES.LOGIN}>
              Login
            </Link>
          </li>
          <li>
            <Link className="cursor-pointer " href={DASHBOARD_PAGES.REGISTER}>
              Register
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar

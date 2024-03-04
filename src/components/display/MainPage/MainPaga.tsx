import { NextPage } from 'next'
import NavBar from '../../common/nav-bar/NavBar'

const MainPage: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className="text-3xl mt-8 text-center">Authorization</div>
    </div>
  )
}

export default MainPage

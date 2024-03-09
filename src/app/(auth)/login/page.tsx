import AuthForm from '@/components/display/AuthForm/AuthForm'
import { NO_INDEX_PAGE } from '@/constans/seo.constans'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  ...NO_INDEX_PAGE,
}
const Page: NextPage = () => {
  return <AuthForm formType={'login'} />
}

export default Page

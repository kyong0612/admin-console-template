import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import Layout from '@/components/layout'

const SamplePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Sample Page</h1>
    </div>
  )
}

SamplePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default SamplePage

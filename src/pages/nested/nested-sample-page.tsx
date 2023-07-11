import { ReactElement } from 'react'
import Layout from '@/components/layout'
import { NextPageWithLayout } from '@/pages/_app'

const NestedSamplePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Nested Sample</h1>
    </div>
  )
}

NestedSamplePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default NestedSamplePage

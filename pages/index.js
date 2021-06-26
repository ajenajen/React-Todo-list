import * as ApiService from '../src/modules/api/service'
export { default } from '../src/components/_pages/TodoPage'

export async function getServerSideProps() {
  const data =  await ApiService.findAll()
  return { props: { data } }
}

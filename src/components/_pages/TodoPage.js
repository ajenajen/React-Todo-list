import { useState } from 'react'
import { Flex, Box } from '../../modules/styles/grid'

import ProgressBar from '../../components/_common/ProgressBar'
import TodoList from '../../components/_common/TodoList'

export default function TodoPage(props) {
  const { data } = props
  const [list, setList] = useState(data)

  return (
   <Flex flexWrap={'wrap'}>
     <Box width={[1, 1/2, 1/3]} p={4} style={{ background: '#F5F5F5', borderRadius: '10px' }}>
       <ProgressBar data={list} />
       <TodoList list={list} setList={setList} />
     </Box>
   </Flex>
  )
}

import { useState } from 'react'
import { Flex, Box } from '../../modules/styles/grid'

import ProgressBar from '../../components/_common/ProgressBar'
import SelectDropdown from '../../components/_common/SelectDropdown'
import TodoList from '../../components/_common/TodoList'

const sortData = [
  { id: 0, value: 'all', label: 'All' },
  { id: 1, value: true, label: 'Done' },
  { id: 2, value: false, label: 'Undone' },
]
export default function TodoPage(props) {
  const { data } = props
  const [list, setList] = useState(data)
  const [sorting, setSorting] = useState(sortData[0])

  return (
   <Flex flexWrap={'wrap'} justifyContent='center'>
     <Box width={[1, 1/1.5, 1/2]} p={4} my={[0, 4, 4]} style={{ background: '#F5F5F5', borderRadius: '10px' }}>
       <ProgressBar data={list} />
       <Flex flexWrap={'wrap'} my={3} alignItems={'center '}>
        <Box width={2/3}><h1>Tasks</h1></Box>
        <Box width={1/3}>
          <SelectDropdown
            options={sortData}
            selectOption={sorting}
            onSelectOptionChange={setSorting}
          />
        </Box>
       </Flex>
       <TodoList list={sorting.value !== 'all'
        ? list.filter(item => item.completed === sorting.value)
        : list} setList={setList} />
     </Box>
   </Flex>
  )
}

// Context 
// handleError
// Notice before remove
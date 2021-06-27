import Select from 'react-select'

export default function SelectDropdown(props) {
  const { options, selectOption, onSelectOptionChange, ...restProps } = props
  
  return (
    <Select
      instanceId={`${Math.floor(Math.random())}`}
      {...restProps}
      value={selectOption}
      options={options}
      onChange={val => {
        onSelectOptionChange(val)
      }}></Select>
  )
}

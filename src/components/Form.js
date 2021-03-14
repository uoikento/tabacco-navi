import React from 'react'
import SearchForm from './SearchForm'
import Location from './Location'
import SubmitButton from './Button'
import SelectForm from './SelectForm'
const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.postWord}>
          <SelectForm genres={props.genres} setSearchGenre={props.setSearchGenre} searchGenre={props.searchGenre}/>
            <SearchForm setSearchKeyword={props.setSearchKeyword} searchKeyword={props.searchKeyword} />
            <SubmitButton />
          <Location setSearchLat={props.setSearchLat} setSearchLng={props.setSearchLng} />
          </form>
    </div>
  )
}

export default Form
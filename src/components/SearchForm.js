import React from 'react' 

const searchForm = (props) => {
  // form中身の変更内容を取得
  const handleSearchKeywordChange = (e) => {
    props.setSearchKeyword(e.target.value)
  }
  return (
    <div>
      <input
        value={props.searchKeyword}
        onChange={handleSearchKeywordChange}
        placeholder="キーワード"
        />
      </div>
  )
}
export default searchForm
import React from 'react'

const Search = ({SearchTerm, setSearchTerm}) => {
  return (
    <div className="search">
     <div>
        <img src="search.svg" alt="searchq" />
        <input
        type="text"
        placeholder="Search for a movie..."
        value={SearchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
     </div>
    </div>
  )
}

export default Search
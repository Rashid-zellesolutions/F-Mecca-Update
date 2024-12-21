import React from 'react'
import './SearchTag.css'

const SearchTag = () => {
    const searchTags = ['brown wicker patio furniture', 'deep', 'seating', 'heavy duty',  'patio']
  return (
    <div className='search-tags-main-container'>
      <h3 className='search-main-heading'>Search</h3>
      <div className='search-tags-container'>
        {searchTags.map((item, index) => (
            <p className='search-tag-item'>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default SearchTag

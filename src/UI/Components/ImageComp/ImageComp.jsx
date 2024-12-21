import React from 'react'
import { url } from '../../../utils/api'

const ImageComp = ({singleImage}) => {
  return (
    <div>
        <img src={`${url}${singleImage}`} alt='single' />
    </div>
  )
}

export default ImageComp

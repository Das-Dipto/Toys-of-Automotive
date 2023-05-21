import React from 'react'
import { useEffect } from 'react'


const useTitle = (title) => {

    useEffect(()=>{
        document.title = `ToTo | ${title}`;
    }, [title])

  return (
    <></>
  )
}

export default useTitle
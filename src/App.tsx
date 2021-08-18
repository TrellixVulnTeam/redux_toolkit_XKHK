import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { requestPhotoList } from './features/photos/photosSlice'
import { RootState } from './store/store'

const App:React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestPhotoList())
  }, [])

  const { photoList } = useSelector((state:RootState) => state.photo)

  return (
    <div>
      {photoList.map((data:any) => {
        return (
          <>
            <span key={data.id}>{data.title}</span>
            <br/>
          </>
        )
      })}    
    </div>
  )
}

export default App

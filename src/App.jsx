import Loading from '@/pages/loading/index.jsx'
import Router from '@/router'
import React, { Suspense } from 'react'
import './App.css'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router/>
    </Suspense>
  )
}

export default App

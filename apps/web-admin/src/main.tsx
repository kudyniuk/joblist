import React from 'react'
import ReactDOM from 'react-dom/client'
import { Authorization } from './Authorization.tsx'
import {JobOfferCard} from '@kudyniuk/components'
import '@kudyniuk/components/style'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authorization/>
    <JobOfferCard name="Senior Java Developer" type="full-time" salaryFrom={15000} salaryTo={20000}/>
  </React.StrictMode>,
)

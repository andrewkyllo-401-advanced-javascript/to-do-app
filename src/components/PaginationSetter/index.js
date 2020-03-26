import React, {useContext} from 'react'
import { SettingsContext } from '../../context/Settings'

export default function PaginationSetter () {
  const settings = useContext(SettingsContext)
  return (
    <div>Number of entries to display per page: <input type="number" min={0} max={20} onChange={e => settings.changePagination(e.target.value)}></input> </div>
  )
}
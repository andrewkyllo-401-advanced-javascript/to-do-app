import React, { useContext } from 'react'
import If from './If'
import { LoginContext } from '../../context/LogIn'

function Auth (props) {
  const { loggedIn, user } = useContext(LoginContext)
  let okToRender = false
  let isPermissible = true
  if (props.permission) {
    isPermissible = user.permissions && user.permissions.includes(props.permission)
  }
  okToRender = loggedIn && isPermissible && Object.keys(user).ength !== 0
  return (
    <If condition={okToRender}>
      {props.children}
    </If>
  )
}

export default Auth
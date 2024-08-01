import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Details() {

   const {state} = useLocation()
   const recipe = state.r.recipe;
   console.log(recipe)


  return (
    <div>Details</div>
  )
}

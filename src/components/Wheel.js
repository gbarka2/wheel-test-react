import React, {useEffect, useRef} from 'react'

export default function Wheel () {

  const wheelRef = useRef(null)

  useEffect(() => {
    console.log(wheelRef.current[Object.keys])
  })

}
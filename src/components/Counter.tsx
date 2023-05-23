'use client'
import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  console.log('hello - 클라이언트')
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num: number) => num + 1)}>숫자 증가</button>
    </>
  )
}

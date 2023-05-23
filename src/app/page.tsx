import Counter from '@/components/Counter'
import Image from 'next/image'
import os from 'os'

export default function Home() {
  console.log('hello - 서버')
  console.log(os.hostname())

  return (
    <>
      <h1>Home Page</h1>
      <Counter />
    </>
  )
}

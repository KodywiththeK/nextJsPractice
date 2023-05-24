import Counter from '@/components/Counter'
import Image from 'next/image'
import os from 'os'

export default function Home() {
  console.log('hello - 서버')
  console.log(os.hostname())

  return (
    <>
      <h1>Home Page 버전 3</h1>
      <Counter />
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="#" width={400} height={400} />
    </>
  )
}

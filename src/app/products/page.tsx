import MeowArticle from '../../components/MeowArticle'
import Link from 'next/link'
import React from 'react'
import { getProducts, Product } from '../service/products'
import clothesImage from '../../../public/images/clothes.jpeg'
import Image from 'next/image'

// export const revalidate = 3

export default async function ProductPage() {
  // 서버 파일(데이터베이스)에 있는 제품 리스트를 읽어와서 그걸 보여줌
  const products = await getProducts()

  return (
    <>
      <h1 className="text-xl font-bold mb-2">제품 소개 페이지</h1>
      <Image src={clothesImage} alt="옷" priority />
      <ul>
        {products.map(({ id, name }: Product, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  )
}

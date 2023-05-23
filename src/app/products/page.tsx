import Link from 'next/link'
import React from 'react'
import { getProducts } from '../service/products'

const products = getProducts()

export default function ProductPage() {
  // 서버 파일(데이터베이스)에 있는 제품 리스트를 읽어와서 그걸 보여줌
  return (
    <>
      <h1 className="text-xl font-bold mb-2">제품 소개 페이지</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

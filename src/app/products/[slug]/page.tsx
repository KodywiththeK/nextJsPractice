import { getProduct, getProducts } from '@/app/service/products'
import { notFound } from 'next/navigation'
import { Props } from 'next/script'
import React from 'react'

type PantsPageProps = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: PantsPageProps) {
  return {
    title: `제품의 이름: ${params.slug}`,
  }
}

export default function PantsPage({ params: { slug } }: PantsPageProps) {
  const product = getProduct(slug)
  if (!product) {
    notFound()
  }
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <div>{product} 제품 설명페이지</div>
}

export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 하자(SSG)
  const products = getProducts() //미리 렌더링하고 싶은 제품 이름 미리 명시
  return products.map((product) => ({
    slug: product,
  }))
}

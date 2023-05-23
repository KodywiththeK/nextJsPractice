import path from 'path'
import { promises as fs } from 'fs'

export type Product = {
  id: string
  name: string
  price: number
}

// 모든 제품 받아오기
export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'data', 'products.json')
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

// params 값 받아서, 해당 아이템 값만 골라주기
export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts()
  return products.find((item) => item.id === id)
}

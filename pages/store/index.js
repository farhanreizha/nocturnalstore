import { getProduct } from '../../src/api/storeApi'
import { Store } from '../../src/components'

export async function getStaticProps() {
  const products = await getProduct()
  return {
    props: { products },
  }
}

export default function productData({ products }) {
  return <Store products={products} />
}

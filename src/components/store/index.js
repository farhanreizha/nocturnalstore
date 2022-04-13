import Image from 'next/image'

export default function Store({ products }) {
  return (
    <div>
      <h1>Nocturn Store</h1>
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <h3>{product.title}</h3>
            <Image src={product.image} width={100} height={100} alt={product.title} />
            <p>{product.rating.rate}</p>
            <p>{product.rating.count}</p>
            <h4>{product.price}</h4>
            <button>detail</button>
          </div>
        ))}
      </div>
    </div>
  )
}

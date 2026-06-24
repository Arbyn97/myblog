import Image from 'next/image';
import products from '../../lib/data.json';

export default async function ProductDetail({ params }) {
  // پارامز نیزا به تعریف نداره وقتی اینجا به عنوان ورودی تعریف میکنیم خودش وقتی مسیر داینامیک وارد بشه به این مرحله میرسه
  const { id } =await params; // پارامتر داینامیک از props می‌آید

  const product = products.find(p => p.id.toString() === id);

  if (!product) return <p className="p-5 text-red-500">محصول یافت نشد</p>;

  return (
    <div className="m-10 p-5 max-w-md mx-auto border rounded shadow-md bg-white dark:bg-neutral-900">
      <h1 className="text-2xl font-bold mb-3">{product.name}</h1>

      <Image 
        src={product.image} 
        alt={product.name} 
        width={200} 
        height={200} 
        className="mb-3"
      />

      <p className="text-lg font-semibold">قیمت: {product.price}</p>
    </div>
  );
}

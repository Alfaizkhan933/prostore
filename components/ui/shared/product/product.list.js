// import ProductCard from "./product-card";

// const ProductList = ({  data, title, limit }) => {

//     const limitedData = limit ? data.slice(0, limit) : data;

//     return (
//          <div className="my-10">
//          <h2 className="h2-bold mb-4">{title}</h2>
//          {data.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {limitedData.map((product) =>(
//                     <ProductCard key={product.slug} product={product} /> 
//                 ))}
//             </div>
//          ): (
//             <div>
//             <p>No product found</p>
//             </div>
//          )}
//     </div> );
// }
 
// export default ProductList;



import ProductCard from "./product-card";
import { insertProductSchema } from "@/lib/validators"; 
import sampleData from "@/db/sample-data";

const ProductList = ({ data, title, limit }) => {
  
  // Validate all products
  const validatedProducts = data
    .map((product) => {
      try {
        return insertProductSchema.parse(product);
      } catch (error) {
        console.error("Product validation failed:", error.errors);
        return null; // Validation fail hone par null return
      }
    })
    .filter(Boolean); //only valid product

  const limitedData = limit ? validatedProducts.slice(0, limit) : validatedProducts;

  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;

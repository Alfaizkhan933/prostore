// import { z } from "zod"
// import { insertProductSchema } from "@/lib/validators"

// export type Product = z.infer<typeof insertProductSchema> & {
//    id: String
// }



// import { insertProductSchema } from "@/lib/validators";
// import sampleData from "@/db/sample-data"; // Import the sample data
// import ProductCard from "@/components/ui/shared/product/product-card";

// // Function to validate product data using the schema
// const validateProduct = (productData) => {
//     try {
//         const validatedProduct = insertProductSchema.parse(productData); // Validate using the schema
//         // console.log("Product is valid!", validatedProduct);
//         return validatedProduct; // Return validated data
//     } catch (error) {
//         // console.error("Product validation failed:", error.errors);
//         return null; // Return null if validation fails
//     }
// };

// // Render function to validate and map through products
// const renderProductCards = () => {
//     const validatedProducts = sampleData.products.map((product) => {
//         const validatedProduct = validateProduct(product);
//         return validatedProduct ? (
//             <ProductCard key={product.slug} product={validatedProduct} />
//         ) : (
//             <p key={product.slug}>Product validation failed!</p>
//         );
//     });

//     return <div>{validatedProducts}</div>;
// };

// // using this in a React component lifecycle
// export default function Page() {
//     return <>{renderProductCards()}</>;
// }



import sampleData from "@/db/sample-data";
import { insertProductSchema } from "@/lib/validators";
import ProductCard from "@/components/ui/shared/product/product-card";

// Function to validate product
const validateProduct = (productData) => {
  try {
    const validatedProduct = insertProductSchema.parse(productData);
    return validatedProduct;
  } catch (error) {
    return null;
  }
};

// Validate all products from sampleData
const validatedProducts = sampleData.products
  .map((product) => validateProduct(product)) // validate each product
  .filter((p) => p !== null); // keep only successfully validated products

// Now you can use validatedProducts to render
export default function ProductListAll() {
  if (validatedProducts.length === 0) {
    return <p>❌ No valid products found!</p>;
  }

  return (
    <div>
      {validatedProducts.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

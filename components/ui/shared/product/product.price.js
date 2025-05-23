import { cn } from "@/lib/utils";

const ProductPrice = ({value, className}) => {

  // Ensure two decimal value

  const stringValue = value.toFixed(2);

  // Get int/float

  const [intValue, floatValue] = stringValue.split('.')

    return ( <p className={ cn('text-2xl', className) }>
        <span className="text-xs align-super">$</span>
        {intValue}
        <span className="text-xs align-super">.{floatValue}</span>
    </p> );
}
 
export default ProductPrice ;
import Card from "../components/Card"

const ProductsSection = () => {
  return (
    <div className=" md:p-6 p-2">
        <p className=" flex items-center text-[4.125rem]">All Components<sup className="text-sm">(12)</sup> </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card/> 
            <Card/> 
            <Card/> 
        </div>
    </div>
  )
}

export default ProductsSection
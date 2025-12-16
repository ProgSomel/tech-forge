import React, { useContext } from "react";
import { ProductContext } from "../../../context";
import Product from "./Product";
import { Oval } from "react-loader-spinner";

export default function Products() {
  const { products, loading, error } = useContext(ProductContext);

  return (
    <>
      {loading.state ? (
        <div className="flex items-center justify-center min-h-100">
          <div className="text-center">
            <Oval
              height={80}
              width={80}
              color="#ff385c"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#f97316"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
            <p className="mt-4 text-slate-600">{loading.message}</p>
          </div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center min-h-100">
          <div className="soft-card p-6 bg-red-50 border-red-200 max-w-md">
            <h3 className="text-red-800 font-semibold mb-2">
              Error Loading Products
            </h3>
            <p className="text-red-600">{error.message}</p>
          </div>
        </div>
      ) : !products?.data || products.data.length === 0 ? (
        <div className="flex items-center justify-center min-h-100">
          <div className="soft-card p-12 text-center">
            <p className="text-slate-500 text-lg">No products available</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}



const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 place-items-center">
      <h1 className="text-3xl font-bold my-8 text-center">Bestseller Products</h1>
      <p className="text-gray-600 mb-8 text-center">Problems trying to resolve the conflict between.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
        <div className="flex justify-center">
          <img  src="/assets/col-md-3.png" alt="Product 1" className="cursor-pointer w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img  src="/assets/Product card.png" alt="Product 2" className="cursor-pointer w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img  src="/assets/Product card (1).png" alt="Product 3" className="cursor-pointer w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img  src="/assets/Product card (2).png" alt="Product 4" className="cursor-pointer w-full h-auto" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
        <div className="flex justify-center">
          <img  src="/assets/col-md-3.png" alt="Product 5" className="cursor-pointer w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img  src="/assets/Product card.png" alt="Product 6" className="cursor-pointer w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img  src="/assets/Product card (1).png" alt="Product 7" className="cursor-pointer w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img  src="/assets/Product card (2).png" alt="Product 8" className="cursor-pointer w-full h-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
        <div className="flex justify-center">
          <img  src="/assets/col-md-3.png" alt="Product 9" className="cursor-pointer w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img  src="/assets/Product card.png" alt="Product 10" className="cursor-pointer w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img  src="/assets/Product card (1).png" alt="Product 11" className="cursor-pointer w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <img  src="/assets/Product card (2).png" alt="Product 12" className="cursor-pointer w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

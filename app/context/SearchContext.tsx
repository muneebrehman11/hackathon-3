// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// interface SearchContextType {
//   searchQuery: string;
//   setSearchQuery: (query: string) => void;
// }

// const SearchContext = createContext<SearchContextType | undefined>(undefined);

// export const SearchProvider = ({ children }: { children: ReactNode }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export const useSearch = () => {
//   const context = useContext(SearchContext);
//   if (!context) {
//     throw new Error("useSearch must be used within a SearchProvider");
//   }
//   return context;
// };

























// debug 
// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// interface SearchContextType {
//   searchQuery: string;
//   setSearchQuery: (query: string) => void;
//   filteredProducts: any[]; // Ensure filteredProducts is an array
//   setProducts: (products: any[]) => void;
// }

// const SearchContext = createContext<SearchContextType | undefined>(undefined);

// export const SearchProvider = ({ children }: { children: ReactNode }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState<any[]>([]); // Initialize as empty array

//   return (
//     <SearchContext.Provider
//       value={{ searchQuery, setSearchQuery, filteredProducts, setProducts: setFilteredProducts }}
//     >
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export const useSearch = () => {
//   const context = useContext(SearchContext);
//   if (!context) {
//     throw new Error("useSearch must be used within a SearchProvider");
//   }
//   return context;
// };




// fixed 



"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  dicountPercentage: number;
  isNew: boolean;
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: Product[]; // Explicitly typing as an array of Product
  setProducts: (products: Product[]) => void; // Explicitly typing the setter function
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Initialize as empty array of Product

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        filteredProducts,
        setProducts: setFilteredProducts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

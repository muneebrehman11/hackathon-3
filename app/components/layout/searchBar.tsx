// import React, { useState } from "react";

// const SearchBar = ({ setSearchQuery }: { setSearchQuery: (query: string) => void }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     setSearchQuery(query);
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)} className="search-icon">
//         🔍
//       </button>
//       {isOpen && (
//         <div className="search-bar">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search products..."
//             className="input-field"
//           />
//           <button onClick={handleSearch}>Search</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

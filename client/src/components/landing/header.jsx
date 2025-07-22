import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-center items-center p-4 bg-white shadow-md">
      <nav>
        <ul className="flex gap-8 items-center">
          <li><a href="#features" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Features</a></li>
          <li><a href="#how-it-works" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">How it Works</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
// import React from 'react';

// const Header = () => {
//   return (
//     <header className="flex justify-between items-center p-4 bg-white shadow-md">
//       <h1 className="text-2xl font-bold text-orange-600">Bundo</h1>
//       <nav>
//         <ul className="flex gap-4">
//           <li><a href="#features" className="hover:text-orange-600">Features</a></li>
//           <li><a href="#how-it-works" className="hover:text-orange-600">How it Works</a></li>
//           <li><a href="#pricing" className="hover:text-orange-600">Pricing</a></li>
//           <li><a href="/login" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500">Get Started</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

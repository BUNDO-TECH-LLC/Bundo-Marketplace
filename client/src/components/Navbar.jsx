import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100/50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-decoration-none hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex-shrink-0">
              <img
                src="/bundo-logo.png"
                alt="Bundo Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-900 m-0 tracking-tight">
                BUNDO
              </h1>
            </div>
          </Link>

          {/* Navigation Links - REMOVED */}

          {/* Auth Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {isLoggedIn ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="hidden sm:inline-flex text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 text-decoration-none"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 bg-transparent border border-gray-200 rounded-lg hover:border-orange-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-orange-600 bg-transparent border border-transparent rounded-lg hover:bg-gray-50 transition-all duration-200 text-decoration-none"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-decoration-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <span className="hidden sm:inline">Get Started</span>
                  <span className="sm:hidden">Sign Up</span>
                </Link>
              </>
            )}

            {/* Mobile Menu Button - REMOVED */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const isLoggedIn = !!localStorage.getItem('token');
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm font-inter">
//       <Link to="/" className="flex items-center text-decoration-none text-black hover:text-gray-700 transition-colors">
//         <img
//           src="/bundo-logo.png"
//           alt="Bundo Logo"
//           className="h-10 mr-2"
//         />
//         <h2 className="text-xl font-semibold m-0 text-black">BUNDO</h2>
//       </Link>

//       <div className="flex items-center space-x-4">
//         {isLoggedIn ? (
//           <>
//             <Link 
//               to="/dashboard" 
//               className="text-gray-700 hover:text-gray-900 transition-colors text-decoration-none font-medium"
//             >
//               Dashboard
//             </Link>
//             <button
//               onClick={handleLogout}
//               className="bg-transparent border-none text-gray-700 hover:text-gray-900 cursor-pointer text-base font-medium transition-colors"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link 
//               to="/register" 
//               className="bg-orange-600 hover:bg-orange-800 text-white px-6 py-2 rounded-full font-medium transition-colors no-underline"

//             >
//               Create Account
//             </Link>
//             <Link 
//               to="/login" 
//               className="bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-6 py-2 border border-gray-300 rounded-lg font-medium transition-colors text-decoration-none"
//             >
//               Login
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Navbar = () => {
// //   const isLoggedIn = !!localStorage.getItem('token');
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     navigate('/');
// //   };

// //   return (
// //     <nav style={{
// //       display: 'flex',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       padding: '1rem 2rem',
// //       backgroundColor: '#f9943b',
// //       color: 'white',
// //       fontFamily: '"Poppins", sans-serif'
// //     }}>
// //       <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
// //         <img
// //           src="/bundo-logo.png"
// //           alt="Bundo Logo"
// //           style={{ height: '40px', marginRight: '8px' }}
// //         />
// //         <h2 style={{ margin: 0 }}>UNDO</h2>
// //       </Link>

// //       <div>
// //         {isLoggedIn ? (
// //           <>
// //             <Link to="/dashboard" style={{ marginRight: '1rem', color: 'black', textDecoration: 'none' }}>
// //               Dashboard
// //             </Link>
// //             <button
// //               onClick={handleLogout}
// //               style={{
// //                 background: 'transparent',
// //                 border: 'none',
// //                 color: 'black',
// //                 cursor: 'pointer',
// //                 fontSize: '1rem'
// //               }}
// //             >
// //               Logout
// //             </button>
// //           </>
// //         ) : (
// //           <>
// //             <Link to="/register" style={{ marginRight: '1rem', color: 'black', textDecoration: 'none' }}>
// //               Create Account
// //             </Link>
// //             <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>
// //               Login
// //             </Link>
// //           </>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

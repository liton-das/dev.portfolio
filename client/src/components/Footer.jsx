import React from 'react'
const Footer = () => {
  return (
    <>
      {/* Footer */}
        <footer className="text-center py-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} v{__APP_VERSION__} Liton Chandra Das. All rights reserved.
        </footer>
    </>
  )
}

export default Footer

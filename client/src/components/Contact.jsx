import React from 'react'

const Contact = () => {
  return (
    <>
      {/* Contact */}
        <section id="contact" className="bg-black/40 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-6 text-teal-500">Contact Me</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Let’s build something amazing together.</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:litonchandra094@gmail.com" className="hover:text-teal-500">Mail</a>
              <a href="https://github.com/liton-das" target="_blank" className="hover:text-teal-500">sdf</a>
              <a href="#" className="hover:text-teal-500">Linkedin</a>
            </div>
          </div>
        </section>
    </>
  )
}

export default Contact

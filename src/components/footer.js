export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white px-6 md:px-12 py-10">
      <div className="grid md:grid-cols-4 gap-10 text-sm">
        
        {/* Column 1 */}
        <div>
  
          <p className="mb-2">
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:info@hindusthanhospital.com" className="hover:text-gray-300">
              info@hindusthanhospital.com
            </a>
          </p>

          <p className="mb-2">
            <span className="font-semibold">Contact:</span> 0422 4327777, 0422 4327778
          </p>

          <p className="mb-4">
            <span className="font-semibold">Emergency No:</span> 0422 - 4327799
          </p>

          <div className="flex space-x-4 items-center text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">📷</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">▶️</a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/specialities" className="hover:text-gray-300">Specialities</a></li>
            <li><a href="/gallery" className="hover:text-gray-300">Gallery</a></li>
            <li><a href="/news" className="hover:text-gray-300">News</a></li>
            <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>

          <p>
            Hindusthan Hospital<br />
            522/3, 523/3 Nava India Road,<br />
            Udaiyampalayam,<br />
            Coimbatore - 641028
          </p>

          <p className="mt-2 mb-6">
            <span className="font-semibold">Phone:</span> +91 422 432 7777
          </p>

          <h4 className="text-lg font-semibold mb-2">Mettupalayam Branch</h4>

          <p>
            Vip Nagar,<br />
            Mettupalayam to Coimbatore Main Road,<br />
            Chickadasampalayam,<br />
            Mettupalayam, Tamil Nadu - 641304
          </p>

          <p className="mt-2">
            <span className="font-semibold">Phone:</span> +91 425 422 3313
          </p>
        </div>

        {/* Column 4 - Map */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <div className="w-full h-52 md:h-64 rounded-md overflow-hidden">
            <iframe
              title="Hindusthan Hospital Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2527591634425!2d76.99247987504542!3d11.019652989144268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85984bad6eb13%3A0x74121d330f8f6126!2sHindusthan%20Hospital!5e0!3m2!1sen!2sin!4v1763896614931!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

     
    </footer>
  );
}

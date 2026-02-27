import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function FloatingSocial() {

  return (

    <>
    
    {/* ================= DESKTOP FLOATING ================= */}

    <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-[999] flex-col gap-4">

      {/* Call */}
      <a
        href="tel:+918925868782"
        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-xl transition hover:scale-110"
      >
        <FaPhoneAlt size={20}/>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918925868782"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition hover:scale-110"
      >
        <FaWhatsapp size={20}/>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/hindusthan_hospital/?hl=en#/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-xl transition hover:scale-110"
      >
        <FaInstagram size={20}/>
      </a>

    </div>



{/* ================= MOBILE BOTTOM BAR ================= */}

<div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-[999] bg-white shadow-2xl rounded-full px-6 py-3 flex gap-8 items-center border">

{/* Call */}

<a
href="tel:+918925868782"
className="text-orange-500 hover:scale-110 transition"
>

<FaPhoneAlt size={22}/>

</a>


{/* WhatsApp */}

<a
href="https://wa.me/918925868782"
target="_blank"
rel="noopener noreferrer"
className="text-green-500 hover:scale-110 transition"
>

<FaWhatsapp size={24}/>

</a>


{/* Instagram */}

<a
href="https://www.instagram.com/hindusthan_hospital/?hl=en#/"
target="_blank"
rel="noopener noreferrer"
className="text-pink-500 hover:scale-110 transition"
>

<FaInstagram size={24}/>

</a>

</div>

    </>

  );
}
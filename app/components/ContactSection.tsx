// // components/ContactSection.jsx

// export default function ContactSection() {
//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Top Row */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

//           {/* LEFT : CONTACT INFO */}
//           <div className="md:col-span-4 space-y-10">

//             <h2 className="text-3xl font-semibold">Contact Info</h2>

//             {/* Phone */}
//             <div className="flex items-start gap-4">
//               <span className="text-red-600 text-xl mt-1">
//                 <i className="fa fa-phone" />
//               </span>
//               <div>
//                 <h4 className="font-semibold uppercase text-sm">Phone Number</h4>
//                 <p className="text-gray-600 mt-1">(+61) 0370 105 611</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-start gap-4">
//               <span className="text-red-600 text-xl mt-1">
//                 <i className="fa fa-envelope" />
//               </span>
//               <div>
//                 <h4 className="font-semibold uppercase text-sm">Email Address</h4>
//                 <p className="text-gray-600 mt-1">carservx@gmail.com</p>
//               </div>
//             </div>

//             {/* Address */}
//             <div className="flex items-start gap-4">
//               <span className="text-red-600 text-xl mt-1">
//                 <i className="fa fa-map-marker" />
//               </span>
//               <div>
//                 <h4 className="font-semibold uppercase text-sm">Address Info</h4>
//                 <p className="text-gray-600 mt-1">
//                   55/11 Land Street, Modern New York City, USA
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* RIGHT : FORM */}
//           <div className="md:col-span-8">

//             <h2 className="text-3xl font-semibold mb-10">Get In Touch</h2>

//             <form className="space-y-6">

//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
//               />

//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
//               />

//               <textarea
//                 rows={5}
//                 placeholder="Message"
//                 className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
//               />

//               <button
//                 type="submit"
//                 className="bg-red-600 text-white px-10 py-3 font-semibold hover:bg-red-700 transition"
//               >
//                 SUBMIT
//               </button>

//             </form>

//           </div>
//         </div>

//       </div>

//       {/* MAP SECTION */}
//       <div className="w-full mt-20">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1671883239943!5m2!1sen!2sin"
//           className="w-full h-[450px] border-0"
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
//       </div>
//     </section>
//   );
// }

// components/ContactSection.tsx
































import React from "react";
import { contactData } from "@/data/contactData";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* LEFT : CONTACT INFO */}
          <div className="md:col-span-4 space-y-10">

            <h2 className="text-3xl font-semibold">Contact Info</h2>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="text-red-600 text-xl mt-1">
                <i className="fa fa-phone" />
              </span>
              <div>
                <h4 className="font-semibold uppercase text-sm">
                  Phone Number
                </h4>
                <p className="text-gray-600 mt-1">
                  {contactData.phone}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="text-red-600 text-xl mt-1">
                <i className="fa fa-envelope" />
              </span>
              <div>
                <h4 className="font-semibold uppercase text-sm">
                  Email Address
                </h4>
                <p className="text-gray-600 mt-1">
                  {contactData.email}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="text-red-600 text-xl mt-1">
                <i className="fa fa-map-marker" />
              </span>
              <div>
                <h4 className="font-semibold uppercase text-sm">
                  Address Info
                </h4>
                <p className="text-gray-600 mt-1">
                  {contactData.address}
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT : FORM */}
          <div className="md:col-span-8">

            <h2 className="text-3xl font-semibold mb-10">
              Get In Touch
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
              />

              <button
                type="submit"
                className="bg-red-600 text-white px-10 py-3 font-semibold hover:bg-red-700 transition"
              >
                SUBMIT
              </button>

            </form>

          </div>
        </div>

      </div>

      {/* MAP SECTION */}
      {/* <div className="w-full mt-20">
        <iframe
          src={contactData.mapEmbedUrl}
          className="w-full h-[450px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}
      

{/* MAP SECTION */}
<div className="w-full mt-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="w-full h-[450px] overflow-hidden rounded-md border">
      <iframe
        src={contactData.mapEmbedUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</div>


    </section>
  );
};

export default ContactSection;

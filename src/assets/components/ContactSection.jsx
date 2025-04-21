import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 grd2-bg font-poppins">
      <div className="max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-normal text-black mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-8 text-lg">
            We'd love to hear from you! Whether you have a question about services, pricing,
            or anything else — our team is ready to answer all your questions.
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-700">+91 94084 25165</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-500 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-700">lynqlogic@gmail.com</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">WhatsApp</h4>
                <p className="text-gray-700">9408425165</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-normal text-black mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:border-yellow-100"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:border-yellow-100"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:border-yellow-100"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

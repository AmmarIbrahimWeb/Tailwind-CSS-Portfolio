import { RiMailSendLine } from "react-icons/ri";
import { BsTelephoneInbound } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        {/* Left Side - Contact Information */}
        <div className='space-y-8'>
          <h2 className='text-5xl'  data-aos="zoom-in-up">Get in touch</h2>
          <p className='text-gray-600 text-[18px] pt-2'  data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>

          {/* Email Address */}
          <div className='flex gap-3 items-center'  data-aos="zoom-in-up">
            <RiMailSendLine size={30} /> ammarmalikccg@gmail.com
          </div>

          {/* Phone Number */}
          <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <BsTelephoneInbound size={30} /> 03181271484
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className='space-y-8'>
          <form action="" method="POST" className='space-y-4'>
            {/* Name Field */}
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
              <label htmlFor='name'>Name</label>
              <input
                type="text"
                className='h-[40px] bg-transparent border border-teal-400 px-2'
                id='name'
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
              <label htmlFor='email'>Email</label>
              <input
                type="email"
                className='h-[40px] bg-transparent border border-teal-400 px-2  data-aos="zoom-in-up"'
                id='email'
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
              <label htmlFor='msg'>Message</label>
              <textarea
                className='bg-transparent border border-teal-400 px-2 py-2'
                id='msg'
                rows={8}
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className='bg-teal-500 text-white py-2 px-6 rounded' data-aos="zoom-in-up">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
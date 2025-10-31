import ContactForm from '@/components/ContactForm'
import { Clock, Mail, Phone } from 'lucide-react'
import React from 'react'
import { MdEmail } from 'react-icons/md'

function Contact() {
  return (
    <div className='min-h-[88vh] py-4 '>
      <div className=' px-12 mx-auto max-w-7xl flex flex-col'>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* header and content */}
            <div className='flex flex-col space-y-8'>
              {/* the header */}
              <div className="space-y-6">
                <h1 className=" bg-secondary w-fit p-2  font-medium text-main rounded-3xl py-2 px-4 text-sm leading-tight">
                  Who We Are
                </h1>
                <h2
                  className="text-2xl md:text-5xl font-semibold text-secondary leading-tight
                  "
                >
                Get in Touch with Our Team
                </h2>
              </div>

              {/* the content */}
              <div className='flex flex-col gap-8'>

                <div className='flex flex-row gap-3 items-center'>
                    <span className='text-6xl font-bold text-primary'>5+</span>
                    <span className=' tracking-wider font-semibold text-primary'>Years of experience</span>
                </div>

                {/* the contact details section */}
                <div className='flex flex-col gap-6'>
                    {/* phone details */}
                    <div className='flex flex-row items-center gap-4'>
                        <div className='bg-secondary/10 p-3 rounded-full text-secondary'>
                            <Phone />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-base text-secondary font-semibold'>Phone</p>
                            <div className='flex flex-col text-sm'>
                                <p>Main Office: 042 955 0837</p>
                                <p>Client Support: 042 955 0837</p>
                            </div>
                        </div>
                    </div>

                    {/* email details */}
                    <div className='flex flex-row items-center gap-4'>
                        <div className='bg-secondary/10 p-3 rounded-full text-secondary'>
                           <Mail />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-base text-secondary font-semibold'>E-mail</p>
                            <div className='flex flex-col text-sm'>
                                <p>General Inquiries</p>
                                <p className='text-secondary underliner font-bold underline'>info@rrrbricklaying.com.au</p>
                            </div>
                        </div>
                    </div>

                    {/* business hours */}
                    <div className='flex flex-row items-center gap-4'>
                        <div className='bg-secondary/10 p-3 rounded-full text-secondary'>
                           <Clock />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-base text-secondary font-semibold'>Business Hours</p>
                            <div className='flex flex-col text-sm'>
                                <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
                                Saturday: 10:00 AM - 2:00 PM Sunday: Closed                          
                            </div>
                        </div>
                    </div>


                </div>
              </div>
            </div>

            {/* the contact form */}
            <div className='flex items-center justify-center w-full'>
                <ContactForm />
            </div>
        </div>


      </div>
    </div>
  )
}

export default Contact
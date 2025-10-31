'use client';

import { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

function ContactHome() {


  return (
    <div className="min-h-[88vh] bg-linear-to-br from-text/10 to-gray/20 py-6 px-4">
      
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center flex  flex-col gap-3  items-center mb-12">
            <h1 className=" bg-secondary w-fit p-2 flex justify-center items-center font-medium text-main rounded-3xl py-2 px-4 text-xl leading-tight">
                  Free Quote
            </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-primary ">
            Get Started Today: Your Project Begins Here
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Need a professional bricklayer or hardscaping quote in Sydney? Use the form below to tell us about your project, or call us directly. We provide rapid responses and free, no-obligation quotes for all residential and commercial inquiries.
          </p>
        </div>

        {/* content section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="space-y-3 flex justify-between flex-col">
            {/* Quick Reply */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 pb-1">Quick Reply</h3>
                  <p className="text-gray-600 text-sm">Usually in 24 hours in working days.</p>
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="flex items-center gap-4 ">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <a href="tel:0429550837" className="text-orange-600 font-semibold hover:text-orange-700 text-lg">
                    0429 550 837
                  </a>
                </div>
              </div>
            </div>

            {/* Send Email */}
            <div className="bg-white rounded-xl px-6 py-8 shadow-md border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Send E-mail</h3>
                  <a href="mailto:info@rrrbricklaying.com.au" className="text-orange-600 font-semibold hover:text-orange-700 text-lg">
                    info@rrrbricklaying.com.au
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                *Submitting your information, you consent to the terms of this Privacy Notice.
              </p>
            </div>
          </div>

          {/* Contact Form */}
           <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <ContactForm />
                </div>
           </div>
          
        </div>

      </div>
    </div>
  );
}

export default ContactHome;
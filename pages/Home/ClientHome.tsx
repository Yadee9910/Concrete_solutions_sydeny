"use client"
import ClientCard from '@/components/cards/ClientCard'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect } from 'react'
import { useRef, useState } from 'react';

function ClientHome() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0); 

  const clientCards = [
    <ClientCard key={1} />,
    <ClientCard key={2} />,
    <ClientCard key={3} />,
    <ClientCard key={4} />,
    <ClientCard key={5} />,
    <ClientCard key={6} />
  ]

  const nextSlide = () =>{
    const prevIndex = (currentIndex + 1 + clientCards.length ) % clientCards.length
    setCurrentIndex(prevIndex)
  }

  const prevSlide = ()=>{
     const prevIndex = (currentIndex - 1 + clientCards.length ) % clientCards.length
    setCurrentIndex(prevIndex)
  }

  useEffect(()=>{
    const interval = setInterval(nextSlide,5000)
    return ()=> clearInterval(interval)
  },[currentIndex])

  return (
    <div className='min-h-[88vh] py-4  '>
      <div className=' px-24 mx-auto flex flex-col gap-16'>

          {/* header */}
          <div className='flex flex-col'>
              <div className="space-y-5">
                <h1 className=" bg-secondary w-fit p-2  font-medium text-main rounded-3xl py-2 px-4 text-sm leading-tight">
                  Loved by Our Clients
                </h1>
                <h2
                  className="text-2xl md:text-5xl font-semibold text-secondary leading-tight
                  "
                >
                What Our Clients Say
                </h2>
              </div>
                 <p className="text-lg text-text leading-relaxed">
             Client feedback is the measure of our success. Read what homeowners and builders are saying about RRR Bricklaying's reliability and quality.
                </p>
          </div>

          {/* the carousel */}
          <div className="relative flex items-center justify-center">

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-6 h-6 text-secondary" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {clientCards.map((card, index) => (
                  <div key={index} className="w-full shrink-0 px-4">
                    {card}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-6 h-6 text-secondary" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {clientCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-secondary" : "bg-gray-300"
                } transition`}
              />
            ))}
          </div>

      </div>
    </div>
  );
}

export default ClientHome;
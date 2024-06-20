'use client'

import ContactForm from '@/components/ContactForm'
import { Footer } from '@/components/footer'


export default function Contato() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="px-8 py-4 bg-green-50 flex flex-col items-center gap-24"> 
          <h2 className="font-['Dancing_Script'] text-5xl font-normal drop-shadow-yellow xl:text-7xl">
              Entre em Contato Conosco
          </h2>
          <ContactForm />
        </section>
      </main>
    </>
  )
}
import Image from 'next/image'
import Hero from "@/app/components/Hero";
import TodoForm from "@/app/components/TodoForm"
export default function Home() {
  return (
    <>
      <section className='flex items-center justify-center flex-col'>
          <Hero/>
          <TodoForm/>
      </section>
    </>
  )
}

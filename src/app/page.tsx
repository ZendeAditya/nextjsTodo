import Image from 'next/image'
import Hero from "@/app/components/Hero";
import TodoForm from "@/app/components/TodoForm"
import StudenData from "@/app/components/StudentData"
export default function Home() {
  return (
    <>
      <section className='flex items-center justify-center flex-col'>
          <Hero/>
          <StudenData/>
      </section>
    </>
  )
}

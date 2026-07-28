import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import TopRated from "@/components/TopRated";
import Why from "@/components/Why";

export default function Home() {
  return (
   <main className=" space-y-16">
    <Hero></Hero>
    <TopRated></TopRated>
    <Why></Why>
    <Testimonials></Testimonials>
   </main>
  );
}

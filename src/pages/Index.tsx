import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load components that are below the fold
const Education = lazy(() => import("@/components/Education"));
const Projects = lazy(() => import("@/components/Projects"));
const Skills = lazy(() => import("@/components/Skills"));
const Experience = lazy(() => import("@/components/Experience"));
const Certificates = lazy(() => import("@/components/Certificates"));
const Blog = lazy(() => import("@/components/Blog"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Khaled Salem | Full Stack .NET Developer</title>
        <meta name="description" content="Full Stack .NET Developer specialized in building robust web applications using C#, ASP.NET Core, and Angular. View my portfolio, projects, and experience." />
        <meta name="keywords" content="Khaled Salem, Full Stack Developer, .NET Developer, ASP.NET Core, Angular, C#, Portfolio" />
        <link rel="canonical" href="https://khaledsalem.dev" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <Education />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Certificates />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Index;

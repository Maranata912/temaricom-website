
import Link from "next/link";

const features = [
  {
    icon: "📚",
    title: "Learning Resources",
    description:
      "Access learning materials, study updates, and useful academic resources in one place.",
  },
  {
    icon: "🎓",
    title: "Find Tutors",
    description:
      "Connect with fellow students and discover academic support when you need it.",
  },
  {
    icon: "📍",
    title: "Campus Services",
    description:
      "Discover campus locations, services, and useful information around your university.",
  },
  {
    icon: "💼",
    title: "Opportunities",
    description:
      "Explore scholarships, internships, events, and opportunities for students.",
  },
  {
    icon: "💬",
    title: "Student Community",
    description:
      "Stay connected and share useful information with your university community.",
  },
  {
    icon: "🔎",
    title: "Lost & Found",
    description:
      "Help students find lost belongings and share information about found items.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="flex items-center justify-between px-6 py-5 md:px-16">
        <Link href="/" className="text-2xl font-extrabold text-black">
          TemariCom<span className="text-gray-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="hover:text-gray-500">Home</a>
          <a href="#features" className="hover:text-gray-500">Features</a>
          <a href="#about" className="hover:text-gray-500">About</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </div>

        <a
          href="#features"
          className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Get Started
        </a>
      </nav>

      <section
        id="home"
        className="relative flex min-h-[570px] items-center bg-cover bg-center px-6 py-20 md:px-16"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.92), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="max-w-2xl text-white">
          <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-gray-300">
            Your University. One Community.
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Everything a student needs, all in one place.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">
            Discover university resources, connect with students, find
            opportunities, and make your campus life easier with TemariCom.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#features"
              className="rounded-full bg-white px-7 py-4 font-bold text-black transition hover:bg-gray-200"
            >
              Explore Features
            </a>

            <a
              href="#about"
              className="rounded-full border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-black"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-widest text-gray-500">
            What We Offer
          </p>

          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Everything you need for campus life
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            TemariCom brings useful university services and student resources
            together in one convenient platform.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl">{feature.icon}</div>

              <h3 className="mt-5 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-gray-100 px-6 py-24 md:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-gray-500">
              About TemariCom
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Making university life simpler and more connected.
            </h2>
          </div>

          <p className="text-lg leading-8 text-gray-600">
            University life should be about learning, growing, and discovering
            opportunities. TemariCom aims to bring students, information, and
            campus services closer together through one accessible platform.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="bg-black px-6 py-16 text-center text-white"
      >
        <h2 className="text-3xl font-bold">
          Be part of the student community.
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-300">
          Discover a more connected university experience with TemariCom.
        </p>
      </section>

      <footer className="flex flex-col items-center justify-between gap-5 bg-white px-6 py-8 md:flex-row md:px-16">
        <p className="font-bold text-black">TemariCom.</p>

        <div className="flex gap-6 text-sm text-gray-600">
          <Link href="/privacy" className="hover:text-black">
            Privacy Policy
          </Link>

          <Link href="/terms" className="hover:text-black">
            Terms & Conditions
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 TemariCom. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

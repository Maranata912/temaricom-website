
import Link from "next/link";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using TemariCom, you agree to follow these Terms & Conditions. If you do not agree, you should not use the platform.",
  },
  {
    title: "2. About TemariCom",
    content:
      "TemariCom is designed to bring university students together with useful academic resources, campus services, and student opportunities.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "Users are expected to provide accurate information, respect other members, and use the platform responsibly.",
  },
  {
    title: "4. Acceptable Use",
    content:
      "Users must not use TemariCom to harass others, distribute harmful content, mislead other students, or interfere with the operation of the platform.",
  },
  {
    title: "5. User Content",
    content:
      "Users may be able to submit messages, posts, or other content. Users are responsible for the content they submit and must have the right to share it.",
  },
  {
    title: "6. Third-Party Services",
    content:
      "Some features may link to external websites or services. Their own terms and privacy practices may apply.",
  },
  {
    title: "7. Changes to the Platform",
    content:
      "Features and services may change as TemariCom develops. Important changes to these terms should be communicated to users appropriately.",
  },
  {
    title: "8. Contact Information",
    content:
      "For questions about these terms, contact the TemariCom team at [Add official contact email].",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <nav className="flex items-center justify-between bg-white px-6 py-5 shadow-sm md:px-16">
        <Link href="/" className="text-2xl font-extrabold text-black">
          TemariCom<span className="text-gray-400">.</span>
        </Link>

        <Link href="/" className="font-medium text-gray-600 hover:text-black">
          Back to Home
        </Link>
      </nav>

      <section className="bg-black px-6 py-16 text-center text-white">
        <p className="font-semibold uppercase tracking-widest text-gray-300">
          TemariCom
        </p>

        <h1 className="mt-3 text-4xl font-extrabold">
          Terms & Conditions
        </h1>

        <p className="mt-4 text-gray-300">
          Guidelines for using the TemariCom platform.
        </p>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-14">
        <div className="mb-8 rounded-xl border border-gray-300 bg-gray-100 p-5 text-sm leading-6 text-gray-800">
          <strong>Draft notice:</strong> This is a starting template.
          Review it against the actual platform features and applicable
          requirements before publishing.
        </div>

        <p className="mb-10 leading-7 text-gray-600">
          Welcome to TemariCom. These terms explain the basic rules and
          responsibilities for using our student platform.
        </p>

        <div className="space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-black">
                {section.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
          Last updated: [Add publication date]
        </p>
      </article>

      <footer className="bg-white px-6 py-8 text-center text-sm text-gray-500">
        © 2026 TemariCom. All rights reserved.
      </footer>
    </main>
  );
}

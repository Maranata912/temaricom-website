
import Link from "next/link";

const sections = [
  {
    title: "1. Introduction",
    content:
      "Welcome to TemariCom. This Privacy Policy explains how information may be handled when you visit or use our website and services.",
  },
  {
    title: "2. Information We May Collect",
    content:
      "Depending on the features you use, TemariCom may receive information you choose to provide, such as your name, email address, university details, or messages. The final policy must describe the information the platform actually collects.",
  },
  {
    title: "3. How Information May Be Used",
    content:
      "Information may be used to provide platform features, respond to requests, improve the student experience, and maintain the security of the service. Only describe uses that genuinely apply to TemariCom.",
  },
  {
    title: "4. Sharing of Information",
    content:
      "This section should explain whether information is shared with service providers, other users, or other organizations, and under what circumstances. Confirm TemariCom's actual sharing practices before publishing.",
  },
  {
    title: "5. Data Security",
    content:
      "We aim to use appropriate measures to protect information. No online service can guarantee absolute security.",
  },
  {
    title: "6. Your Choices and Rights",
    content:
      "Users should be able to find out how to request access, correction, or deletion of their personal information, subject to applicable requirements. Add the actual process for contacting TemariCom.",
  },
  {
    title: "7. Contact Us",
    content:
      "For privacy questions or requests, contact the TemariCom team at [Add official contact email].",
  },
];

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <p className="mt-4 text-gray-300">
          Learn how information is handled when using our platform.
        </p>
      </section>

      <article className="mx-auto max-w-4xl px-6 py-14">
        <div className="mb-8 rounded-xl border border-gray-300 bg-gray-100 p-5 text-sm leading-6 text-gray-800">
          <strong>Draft notice:</strong> This is a starting template, not a
          finalized legal policy. Confirm TemariCom's actual data practices
          and replace all placeholders before publishing.
        </div>

        <p className="mb-10 leading-7 text-gray-600">
          We value the trust of our student community. Please read this page
          to understand the privacy practices that should apply to TemariCom.
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

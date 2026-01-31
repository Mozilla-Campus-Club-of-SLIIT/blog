import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SLIIT Mozilla Blog",
  description:
    "Learn about the SLIIT Mozilla Club, our mission, and the community behind the SLIIT Mozilla Blog.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <header className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-[#D9622B]">
              About
            </h1>
            <p className="text-lg text-gray-600">
              SLIIT Mozilla Blog is the official space for the SLIIT Mozilla Club
              to share stories, events, and community-driven learning.
            </p>
          </header>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Who we are</h2>
            <p className="mt-3 text-gray-600">
              We are a student-led community at SLIIT dedicated to open web
              technologies, inclusive learning, and hands-on collaboration. This
              blog highlights our initiatives, workshops, and community impact.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

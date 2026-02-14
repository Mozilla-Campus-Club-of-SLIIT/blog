import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | SLIIT Mozilla Blog",
  description:
    "Learn about the SLIIT Mozilla Club, our mission, and the community behind the SLIIT Mozilla Blog.",
};

function CornerBox({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative rounded-xl border border-[#D9622B] bg-white p-8 text-center shadow-sm">
      {/* corner accents */}
      <span className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-[#D9622B]" />
      <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-[#D9622B]" />
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className = "flex items-center justify-center gap-6 bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className = "container mx-auto px-4">
          <div className = "flex justify-center">
            <Image
              src = "/HeroLogo.png"
              alt = "SLIIT Mozilla Campus Club Logo"
              width={800}
              height={400}
              className = "h-auto w-full max-w-md md:max-w-lg"
              priority
            />
          </div>
        </div>     
      </section>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="space-y-14">
          {/* Top Intro Box */}
          <div className="flex justify-center">
            <div className="w-fit max-w-3xl">
              <CornerBox>
                <p className="text-lg leading-relaxed text-gray-600">
                  The SLIIT Mozilla Blog Team is a passionate group of writers,
                  editors, and content creators dedicated to documenting the journey
                  of our club. From major tech events and workshops to community
                  initiatives and member achievements, we ensure that every
                  meaningful moment is captured and shared with the world.
                </p>
              </CornerBox>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid gap-10 md:grid-cols-2">
            <CornerBox>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                The mission of the SLIIT Mozilla Blog Team is to create
                meaningful, high-quality content that documents club activities,
                shares technical knowledge.
              </p>
            </CornerBox>

            <CornerBox>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                The vision of the SLIIT Mozilla Blog Team is to become a trusted
                and influential student-led tech content platform that inspires
                innovation, collaboration, and learning.
              </p>
            </CornerBox>
          </div>
        </div>
      </div>
    </div>
  );
}

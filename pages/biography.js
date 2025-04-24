import { NextSeo } from 'next-seo'

import AsSeenOn from '../components/AsSeenOn'

export default function Biography() {
  return (
    <>
      <NextSeo
        title="About"
        description="I'm a self-taught photographer based in Montréal, QC. My passion for photography was born from a deep desire to share and document the beauty I see in my environment."
        openGraph={{
          title: 'About',
          description:
            "I'm a self-taught photographer based in Montréal, QC. My passion for photography was born from a deep desire to share and document the beauty I see in my environment.",
          images: [
            {
              url: 'https://og.jpvalery.me/api/og/photo/About',
              width: 1531,
              height: 875,
              alt: 'Open Graph Image',
            },
          ],
        }}
      />
      <main>
        <div className="grid justify-items-center gap-8">
          <img
            className="h-48 w-48 rounded-full"
            src="/static/biswa.jpg"
            alt=""
          />
          <h1 className="bg-linear-to-r from-titleg1 to-titleg2 bg-clip-text pb-8 text-center font-serif text-5xl font-bold text-transparent md:text-6xl">
            About me
          </h1>
        </div>

        <div className="mx-auto grid w-10/12 grid-flow-row gap-12">
          {/* <AsSeenOn /> */}

          <div>
            <h2 className="py-6 font-serif text-2xl font-bold">About me</h2>

            <div className="prose prose-lg max-w-full text-white">
              <p>
              Welcome to the visual world of Bishwajit Sarker, a professional photographer and videographer based in Dhaka, Bangladesh.
              With over two decades of experience across fashion, editorial, commercial, and documentary projects, I strive to tell honest and compelling stories through my lens.
              From high-end fashion shoots to human-centered narratives, my work reflects a commitment to both artistic excellence and social insight.
              Whether working with brands, publications, or development organizations, I bring a thoughtful and collaborative approach to every assignment.
              

              </p>

              <p>
              Thank you for visiting—please explore the portfolio to discover moments shaped by light, emotion, and purpose.

              </p>

              
            </div>
          </div>
         
        </div>
      </main>
    </>
  )
}

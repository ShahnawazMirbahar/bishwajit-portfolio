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
            src="/static/jp-valery-avatar.webp"
            alt=""
          />
          <h1 className="bg-gradient-to-r from-titleg1 to-titleg2 bg-clip-text pb-8 text-center font-serif text-5xl font-bold text-transparent md:text-6xl">
            About me
          </h1>
        </div>

        <div className="mx-auto grid w-10/12 grid-flow-row gap-12">
          <AsSeenOn />

          <div>
            <h2 className="py-6 font-serif text-2xl font-bold">About me</h2>

            <div className="prose prose-lg max-w-full text-white">
              <p>
                I'm a self-taught photographer based in Montréal, QC. My passion
                for photography was born from a deep desire to share and
                document the beauty I see in my environment.
              </p>

              <p>
                My work has been featured in international publications multiple
                times. I published my first book "An American Road Trip" in 2016
                which was followed by my sophomore effort in 2018 "Mystic Mists
                of Massachusetts".
              </p>

              <p>
                In 2017 and 2018, I have been nominated Community Allstar on
                Unsplash.com where my pictures have received close to{' '}
                <a href="https://unsplash.com/@jpvalery">
                  225 Millions views and have been downloaded over 1.25 Million
                  times.
                </a>
              </p>

              <p>
                In 2019, I founded the{' '}
                <a href="https://montrealphoto.club">Montréal Photo Club</a> to
                organize photography events and gatherings in Montréal.
              </p>

              <p>
                In 2020, I released{' '}
                <a
                  href="https://lookbutnostopping.com"
                  className="underline hover:text-accent"
                >
                  LookButNoStopping.com
                </a>
                , an interactive web experience with photos from my trip to
                Newfoundland the year before.
              </p>

              <p>
                For more information, or to get in touch regarding employment
                opportunities, or to just say hello, feel free to{' '}
                <a
                  href="https://contact.jpvalery.me/photography"
                  className="underline hover:text-accent"
                >
                  send me a message
                </a>
                .
              </p>
            </div>
          </div>
          <div>
            <h2 className="py-6 font-serif text-2xl font-bold">
              My artist statement
            </h2>

            <div className="prose prose-lg max-w-full text-white">
              <p>
                I envision a very natural photography – close to the standards
                for photojournalism. Thus, all of my pictures are not digitally
                altered (so neither retouched, photoshopped, or transformed).
              </p>

              <p>
                I try to capture images that transmit emotion and tell stories.
                I’d define my vision as almost naturalist but not emotionless in
                the depiction of my reality.
              </p>
            </div>

            <p className="py-2 text-lg font-semibold italic text-accent">
              There’s a lot of beauty in ordinary things. Isn’t that kind of the
              point?
            </p>
          </div>
          <div>
            <h2 className="py-6 font-serif text-2xl font-bold">Exhibitions</h2>
            <p className="py-2 text-lg">
              <span className="font-semibold text-accent">
                2018 An American Road Trip
              </span>{' '}
              - Extracts presented at Université de Sherbrooke during
              Anthrophocene
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

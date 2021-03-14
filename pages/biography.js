const Media = [
  { name: 'CBC-Radio Canada - Radio interview' },
  { name: 'Lonely Planet' },
  { name: 'Explore Canada' },
  { name: 'PetaPixel' },
  { name: 'BoredPanda' },
  { name: 'Abduzeedo - Daily Inspiration' },
  { name: 'Unsplash' },
  { name: 'Burst' },
  { name: 'Scribe' },
  { name: 'VYSUAL' },
  { name: 'Kedge Business School - Alumni Portraits' },
]

import { NextSeo } from 'next-seo'

export default function Biography() {
  return (
    <>
      <NextSeo
        title="About"
        description="I'm a 29 years old self-taught photographer based in Montréal, QC. My passion for photography was born from a deep desire to share and document the beauty I see in my environment."
      />
      <main>
        <div className="grid gap-8 justify-items-center">
          <img
            className="w-48 h-48 rounded-full"
            src="/static/jp-valery-avatar.webp"
            alt=""
          />
          <h1 className="pb-8 font-serif text-5xl font-bold text-center text-transparent md:text-6xl from-titleg1 to-titleg2 bg-gradient-to-r bg-clip-text">
            About me
          </h1>
        </div>

        <div className="w-10/12 mx-auto">
          <h2 className="py-6 font-serif text-2xl font-bold">About me</h2>

          <div className="max-w-full prose prose-lg text-white">
            <p>
              I'm a 29 years old self-taught photographer based in Montréal, QC.
              My passion for photography was born from a deep desire to share
              and document the beauty I see in my environment.
            </p>

            <p>
              My work has been featured in international publications multiple
              times. I published my first book "An American Road Trip" in 2016
              which was followed by my sophomore effort in 2018 "Mystic Mists of
              Massachusetts".
            </p>

            <p>
              In 2017 and 2018, I have been nominated Community Allstar on
              Unsplash.com where my pictures have received more than{' '}
              <a href="https://unsplash.com/@jpvalery">130 Millions views.</a>
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

          <h2 className="py-6 font-serif text-2xl font-bold">
            My artist statement
          </h2>

          <div className="prose prose-lg text-white">
            <p>
              I envision a very natural photography – close to the standards for
              photojournalism. Thus, all of my pictures are not digitally
              altered (so neither retouched, photoshopped, or transformed).
            </p>

            <p>
              I try to capture images that transmit emotion and tell stories.
              I’d define my vision as almost naturalist but not emotionless in
              the depiction of my reality.
            </p>
          </div>

          <p className="py-2 text-lg italic font-semibold text-accent">
            There’s a lot of beauty in ordinary things. Isn’t that kind of the
            point?
          </p>

          <h2 className="py-6 font-serif text-2xl font-bold">
            Media Coverage & Featurings
          </h2>

          <ul className="grid grid-flow-row grid-cols-1 gap-1 uppercase md:grid-cols-2 justify-items-start">
            {Media.map(({ name }) => (
              <li className="inline-flex items-center px-2 py-1">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {name}
              </li>
            ))}
          </ul>

          <h2 className="py-6 font-serif text-2xl font-bold">Exhibitions</h2>
          <p className="py-2 text-lg">
            <span className="font-semibold text-accent">
              2018 An American Road Trip
            </span>{' '}
            - Extracts presented at Université de Sherbrooke during
            Anthrophocene
          </p>
        </div>
      </main>
    </>
  )
}

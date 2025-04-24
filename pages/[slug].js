import galleriesData from '../data/gallery'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import unified from 'unified'

import SubGallery from '../components/SubGallery'
import TagLabel from '../components/TagLabel'

import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export default function GalleryDetailPage() {
  const router = useRouter()
  const { slug } = router.query

  const selectedGallery = galleriesData.find((gallery) => gallery.slug === slug)

  if (!selectedGallery) {
    return <div className="text-center text-white py-10">Loading gallery...</div>
  }

  const seoContent = unified().use(parse).use(remark2react).processSync(selectedGallery.seoBody).result

  return (
    <>
      <NextSeo
        title={`${selectedGallery.title} | Gallery Showcase`}
        description={selectedGallery.seoBody}
        openGraph={{
          title: `${selectedGallery.title} | Gallery Showcase`,
          description: selectedGallery.seoBody,
          images: [{ url: selectedGallery.heroImage.url }],
        }}
      />

      <main>
        <div className="mx-auto grid py-12">
          <div className="pb-2">
            <h1 className="bg-linear-to-r from-titleg1 to-titleg2 bg-clip-text py-4 text-center font-serif text-5xl font-bold text-transparent md:text-6xl">
              {selectedGallery.title}
            </h1>
            <p className="text-center text-2xl font-bold text-accent">
              {selectedGallery.year}
            </p>
          </div>

          <div className="mx-auto pt-2 pb-4">
            <ul className="grid grid-flow-col gap-2">
              {selectedGallery.tagsCollection.items.map((tag) => (
                <TagLabel key={tag.slug} slug={tag.slug} title={tag.title} />
              ))}
            </ul>
          </div>

          <div className="mx-auto">
            <p className="prose prose-2xl text-center text-gray-50">{seoContent}</p>
          </div>
        </div>

        <div className="grid grid-flow-row grid-cols-1 items-center justify-items-center gap-32 p-8 md:p-32">
          <SubGallery
            key={selectedGallery.id}
            title={selectedGallery.title}
            images={selectedGallery.imagesCollection.items}
          />
        </div>
      </main>
    </>
  )
}

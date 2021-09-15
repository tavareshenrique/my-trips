type ImageProps = {
  url: string
  height: number
  width: number
  fileName: string
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>

      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />

      {place.gallery.map((image, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`image.fileName-${index}`}
          src={image.url}
          alt={image.fileName}
          height={image.height}
          width={image.width}
        />
      ))}
    </>
  )
}

import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline'

import LinkWrapper from 'components/LinkWrapper'

import { HomeTemplateProps } from './@types'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: HomeTemplateProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

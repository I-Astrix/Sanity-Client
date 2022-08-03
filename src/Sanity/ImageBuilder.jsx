import imageUrlBuilder from '@sanity/image-url'
import sanityCli from './Sanity';


const builder = imageUrlBuilder(sanityCli)

export default function urlFor(source) {
  return builder.image(source)
}

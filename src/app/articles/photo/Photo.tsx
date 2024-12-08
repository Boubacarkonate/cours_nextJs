import Image from 'next/image'

const Photo = () => {
  return (
    <div>
      <Image
      src="/article.png"
      alt='photo'
      width={250}
      height={250}
      />
    </div>
  )
}

export default Photo

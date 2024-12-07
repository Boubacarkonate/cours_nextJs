import Image from 'next/image'

const ImageURL = () => {
  return (
    <div>
      <Image 
      src="https://plus.unsplash.com/premium_photo-1709311452215-496c6740ca59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt='photo'
      width={500}
      height={300}
      />
    </div>
  )
}

export default ImageURL

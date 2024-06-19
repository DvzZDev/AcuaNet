import Image from 'next/image'

function CardFuentes({ image, title }) {
  return (
    <article className="h-[250px] w-[250px]">
      <div className="flex h-auto w-full items-center justify-center md:h-[120px]">
        <Image
          src={image}
          alt="Fuentes"
          objectFit="cover"
          width={350}
          height={350}
        />
      </div>
      <div>
        <h1 className="pt-5 text-center text-xl text-textprimary"> {title} </h1>
      </div>
    </article>
  )
}

export default CardFuentes

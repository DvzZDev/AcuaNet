import Image from 'next/image'

function CardFuentes({ image, title }) {
  return (
    <article className="flex h-[250px] w-[250px] flex-col items-center justify-center">
      <div className="flex h-auto w-full items-center justify-center">
        <Image
          src={image}
          alt="Fuentes"
          objectFit="cover"
          width={350}
          height={350}
          draggable={false}
        />
      </div>
      <div>
        <h1 className="pt-5 text-center text-xl text-textprimary"> {title} </h1>
      </div>
    </article>
  )
}

export default CardFuentes

import Image from 'next/image'

function CardFuentes({ image, title }) {
  return (
    <article className="mb-7 flex h-[200px] w-[250px] flex-col items-center">
      <div className="flex h-[100px] w-full items-center justify-center">
        <Image
          src={image}
          alt="Fuentes"
          width={500}
          height={500}
          draggable={false}
        />
      </div>
      <div className="h-[100px]">
        <h1 className="pt-5 text-center text-xl text-textprimary"> {title} </h1>
      </div>
    </article>
  )
}

export default CardFuentes

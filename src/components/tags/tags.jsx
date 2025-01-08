import Link from "next/link"

const Tags = ({ tags }) => {
  return (
    <section className='py-4 md:sticky top-[71px] bg-white z-[9]'>
      <div className="container mx-auto">
        <ul className='flex gap-2 items-center md:justify-center md:flex-wrap overflow-x-auto tags'>
          {tags?.map((tag, idx) => (
            <li className={`uppercase text-nowrap text-sm text-theme-main font_calibri bg-[#E0E2FB] py-[9px] px-[25px] rounded-full ${idx === 0 && "ml-3 md:ml-0"}`} key={idx}>
              <Link href={`#${tag}`}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Tags
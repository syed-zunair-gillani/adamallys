import Link from "next/link"

const Tags = ({ tags }) => {
  return (
    <section className='container mx-auto px-3 py-4 sticky top-[71px] bg-white'>
      <ul className='flex gap-2 items-center justify-center flex-wrap'>
        {tags?.map((tag, idx) => (
          <li className='uppercase text-sm text-theme-main font_calibri bg-[#E0E2FB] py-[9px] px-[25px] rounded-full' key={idx}>
            <Link href={`#${tag}`}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tags
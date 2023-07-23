import Link from "next/link"
import { Fragment } from "react"
import { BsChevronDown } from "react-icons/bs"

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
]

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
]

const Menue = ({ showCatMenue, setshowCatMenue }) => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
      {data.map(({ id, name, url, subMenu }) => {
        return (
          <Fragment key={id}>
            {subMenu ? (
              <li
                className='cursor-pointer flex items-center gap-2 relative '
                onMouseEnter={() => {
                  return setshowCatMenue(true)
                }}
                onMouseLeave={() => {
                  return setshowCatMenue(false)
                }}
              >
                {name}
                <BsChevronDown size={14} />
                {showCatMenue && (
                  <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 text-black shadow-lg'>
                    {subMenuData.map(({ id, name, doc_count }) => {
                      return (
                        <Link
                          key={id}
                          href='/'
                          className='flex justify-between'
                        >
                          <li className='h-12 flex flex-row justify-between items-center px-3 hover:bg-black/[.03] rounded-md'>
                            {name}
                          </li>
                          <span className='opacity-50 text-sm'>
                            {doc_count}
                          </span>
                        </Link>
                      )
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li>
                <Link href={url}>{name}</Link>
              </li>
            )}
          </Fragment>
        )
      })}
    </ul>
  )
}

export default Menue

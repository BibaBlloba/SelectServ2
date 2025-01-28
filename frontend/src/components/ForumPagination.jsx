import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ForumPagination = ({ page, Left, Right }) => {
  return (
    <div className='flex flex-row justify-center items-center gap-5'>
      <button onClick={Left} className="size-[35px] rounded-[3px] border-[#31435D] text-[#31435D] hover:border-[#D9D9D9] hover:text-[#D9D9D9] transition-colors duration-150 border-[1px] flex justify-center items-center">
        <FaArrowLeft />
      </button>
      <p className="text-[#31435D] text-xl">{page}</p>
      <button onClick={Right} className="size-[35px] rounded-[3px] border-[#31435D] text-[#31435D] hover:border-[#D9D9D9] hover:text-[#D9D9D9] transition-colors duration-150 border-[1px] flex justify-center items-center">
        <FaArrowRight />
      </button>
    </div>
  )
}

export default ForumPagination

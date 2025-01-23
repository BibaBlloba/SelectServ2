import mrbeast from "../assets/mrbeast.svg"
import forbes from "../assets/forbes.svg"

const Sponsor = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-white">
      <div className="logos-slider inline-block space-x-[200px] p-[30px] animate-loop-scroll">
        <img loading="lazy" src={mrbeast} />
        <img loading="lazy" src={forbes} />
        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/8/85/BlackRock_wordmark.svg" />
      </div>
      <div className="logos-slider inline-block space-x-[200px] p-[30px] animate-loop-scroll">
        <img loading="lazy" src={mrbeast} />
        <img loading="lazy" src={forbes} />
        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/8/85/BlackRock_wordmark.svg" />
      </div>
      <div className="logos-slider inline-block space-x-[200px] p-[30px] animate-loop-scroll">
        <img loading="lazy" src={mrbeast} />
        <img loading="lazy" src={forbes} />
        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/8/85/BlackRock_wordmark.svg" />
      </div>
    </div>
  )
}

export default Sponsor

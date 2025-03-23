import CardSvg from "./CardSvg";

function InfoCard({title,text, goto}) {
    return (
      <div className="bg-accent-50 dark:bg-accent-800 w-full md:w-[360px] rounded-3xl border-2 border-accent-200 dark:border-accent-700 p-3 mb-1">
        <div className="flex items-center cursor-pointer" onClick={goto} >
          <CardSvg title={title} />
          <div className="relative z-0 -left-4 w-full px-5 h-8 bg-accent-200 dark:bg-accent-700 rounded-r-3xl flex items-center text-accent-500 dark:text-accent-300 select-none">
            {title}
          </div>
        </div>
        <p className="plus-font text-sm p-2 text-accent-500 dark:text-accent-300">
          {text}
        </p>
      </div>
    );
}

export default InfoCard;
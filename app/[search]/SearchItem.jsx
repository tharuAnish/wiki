export default function SearchItem({ page }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 p-1 pr-4 rounded-full bg-gray-200 ">
          <div className=" h-8 w-8  bg-gray-400 rounded-full flex items-center justify-center">
            {page.thumbnail?.source ? (
              <img
                src={page.thumbnail.source}
                alt={page.title}
                // height={page.thumbnail.height}
                // width={page.thumbnail.width}
                loading="lazy"
                className="h-8 w-8 rounded-full  object-cover "
              />
            ) : (
              <span>
                {page.title
                  .split(" ")
                  .slice(0, 2) // Get the first two words
                  .map((word) => word[0].toUpperCase()) // Get the first letter of each word
                  .join("")}
              </span>
            )}
          </div>

          <h2 className=" text-sm font-medium hover:underline text-neutral-800">
            <a
              href={`https://en.wikipedia.org/?curid=${page.pageid}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {page.title}
            </a>
          </h2>
        </div>

        <a
          href={`https://en.wikipedia.org/?curid=${page.pageid}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm opacity-60 hover:underline"
        >
          {`https://en.wikipedia.org/?curid=${page.pageid}`}{" "}
          <span className="text-xs">🔗</span>
        </a>
      </div>

      <div>
        <h2 className="font-bold text-lg text-slate-800 hover:underline">
          <a
            href={`https://en.wikipedia.org/?curid=${page.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {page.title}
          </a>
        </h2>
        <p className="text-neutral-700 text-sm">{page.extract}</p>
      </div>
    </div>
  )
}

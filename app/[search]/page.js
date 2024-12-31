import GetWikiResult from "@/lib/getWikiResult"
import SearchItem from "./SearchItem"

export async function generateMetadata({ params }) {
  // Await params.search before making the async call
  const searchTerm = params.search || ""
  const wikiData = GetWikiResult(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replaceAll("%20", " ")

  // Meta data if data not found
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} : Not Found`,
      description: `No search results found for "${displayTerm}".`,
      openGraph: {
        title: `${displayTerm} : Not Found`,
        description: `No search results found for "${displayTerm}".`,
        images: [
          {
            url: "/default-og-image.jpg", // A fallback image for when no results are found
            width: 1200,
            height: 630,
            alt: `${displayTerm} not found`,
          },
        ],
      },
    }
  }

  const page = Object.values(data.query.pages)[0] // Use the first result
  const description =
    page.extract?.slice(0, 160) ||
    `Search result for "${displayTerm}" on Wikipedia.`
  const ogImage = page.thumbnail?.source || "/default-og-image.jpg" // Use thumbnail if available, or a default image

  return {
    title: `${displayTerm}`,
    description: description, // Here we use the extracted description text
    openGraph: {
      title: `${displayTerm}`,
      description: description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Image for ${displayTerm}`,
        },
      ],
    },
  }
}

export default async function page({ params }) {
  // Await params.search before making the async call
  const searchTerm = params.search || ""
  const wikiData = GetWikiResult(searchTerm)
  const data = await wikiData
  const result = data?.query?.pages
  const displayTerm = searchTerm.replaceAll("%20", " ")
  console.log(result)

  return (
    <div className="py-4">
      <div className="bg-stone-50 shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold  mb-6 opacity-60">
          Search Results for: "<span className="italic">{displayTerm}</span>"
        </h2>
        <div className="space-y-4">
          {result ? (
            Object.entries(result).map(([key, page], index) => (
              <div key={key}>
                <SearchItem page={page} />
                {index < Object.entries(result).length - 1 && (
                  <div className="border-b w-11/12 mx-auto  my-5"></div> // Border between items
                )}
              </div>
            ))
          ) : (
            <p>{`No results for ${searchTerm}.`}</p>
          )}
        </div>
      </div>
    </div>
  )
}

import Header from "@/components/Header"
import SearchInput from "@/components/SearchInput"
import SearchContent from "./components/SearchContent"

interface SearchProps {
    searchParams: {
        query: string
        type: string 
    }
}

const Search = async ({ searchParams }: SearchProps) => {
    const found = []
    return (
        <div
          className="
            rounded-lg 
            h-full 
            w-full 
            overflow-hidden 
            overflow-y-auto
          "
        >
          <Header>
            <div className="mb-2 flex flex-col gap-y-6">
              <h1 className="text-white text-3xl font-semibold">
                Search
              </h1>
              <SearchInput />
            </div>
          </Header>
          <SearchContent/>
        </div>
      );
}

export default Search;
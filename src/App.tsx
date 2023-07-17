import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CategoryList } from "./components/books/CategoryList";
import { useState } from "react";
import { BooksList } from "./components/books/BooksList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  const [selectedList, setSelectedList] = useState("hardcover-fiction");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen grid grid-rows-[min-content_1fr_min-content] bg-slate-100 space-y-5 md:space-y-10">
        <Header />
        <div className="container mx-auto px-3 flex flex-col">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 flex-1">
            <div className="md:w-[300px]">
              <CategoryList setSelectedList={setSelectedList} />
            </div>
            <div className="flex-1 md:px-5">
              <BooksList listSlug={selectedList} />
            </div>
            <div className="md:w-[300px]"></div>
          </div>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;

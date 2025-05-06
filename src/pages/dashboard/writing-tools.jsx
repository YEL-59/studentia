import { useState } from "react";
import Aiwritergrid, { tools } from "@/components/dashboard/aiwritergrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function WritingTools() {
  const [favorites, setFavorites] = useState([]);

  const favoriteTools = tools.filter((tool) => favorites.includes(tool.title));

  return (
    <div>
      <Tabs defaultValue="templates" className="w-full">
        <div className="flex ml-16 mt-4">
          <TabsList className="bg-[#10122e] px-4 py-7 border border-[#D24AC966] rounded-full flex gap-2 mb-5">
            <TabsTrigger
              value="templates"
              className="cursor-pointer data-[state=active]:bg-gradient-to-b from-primary to-secondary data-[state=active]:text-white px-6 py-4 text-primary border border-[#D24AC966] rounded-[12px]"
            >
              Templates
            </TabsTrigger>
            <TabsTrigger
              value="fav-templates"
              className="cursor-pointer data-[state=active]:bg-gradient-to-b from-primary to-secondary data-[state=active]:text-white px-6 py-4 text-primary border border-[#D24AC966] rounded-[12px]"
            >
              Favorite Templates
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="templates">
          <Aiwritergrid
            tools={tools}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </TabsContent>

        <TabsContent value="fav-templates">
          {favoriteTools.length > 0 ? (
            <Aiwritergrid
              tools={favoriteTools}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ) : (
            <div className="text-center text-white mt-10 text-lg">
              No favorite templates selected.
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default WritingTools;

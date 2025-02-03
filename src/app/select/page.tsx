"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SelectTabs() {
  const [selected, setSelected] = useState(0);
  const router = useRouter()
  return (
    <div className="">
      <Tabs
        defaultValue="account"
        className="w-full  max-w-full mx-auto p-4 pt-10"
      >
        <TabsList className="text-purple-800 bg-slate-500  grid w-full grid-cols-2">
          <TabsTrigger value="account">Default Templates</TabsTrigger>
          <TabsTrigger value="password">AI Generated Templates</TabsTrigger>
        </TabsList>
        <TabsContent
          value="account"
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-[70vh]"
        >
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`cursor-pointer hover:scale-105 duration-1000 relative w-full  ${
                selected === index
                  ? "border-purple-800 border-2 rounded-lg "
                  : ""
              }  min-h-[300px] `}
            >
              <Image
                src={`/Templates/Template${index}.png`}
                alt={`template${index}`}
                layout="fill"
                objectFit=""
                className="rounded-lg p-1"
              />
            </div>
          ))}
        </TabsContent>
        <TabsContent value="password">
          <div className="flex justify-center items-center -mt-[25rem] pb-20">
            <p className="font-semibold text-3xl text-purple-600 font-mono ">
              Coming Soon...
            </p>
          </div>
        </TabsContent>
      </Tabs>
        <div className="flex justify-end mr-10">
          <Button onClick={()=>router.push(`/Template${selected}`)} disabled={selected <= 0 || selected > 3} className="w-[20%]">
      {/* <Link href={`/Template${selected}`}> */}
            Next
      {/* </Link> */}
          </Button>
        </div>
    </div>
  );
}

const SelectView: React.FC = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="flex justify-center ">
        <p className="font-semibold text-3xl text-purple-800 font-mono pt-10">
          This is just an Idea Image Your Information will Be populated in it
        </p>
      </div>
      <div className="">
        <SelectTabs />
      </div>
    </div>
  );
};
export default SelectView;

import { useQueryClient } from "@tanstack/react-query";
import { BsArrowDown } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { motion } from "framer-motion";
import useAppState from "@/hooks/useAppState";
import { ITag } from "@/type/index";
import { useState } from "react";
import ListTags from "./ListTags";

export default function AddExpense() {
  const [isSelectTag, setSelectTag] = useState(false);
  const { data } = useAppState();
  const [tag, setTag] = useState<ITag>();

  const queryClient = useQueryClient();

  const closeAdding = () => {
    const updateState = { ...data };
    updateState["isAddingExpense"] = false;
    queryClient.setQueryData(["state"], updateState);
  };

  const closeTags = () => {
    closeAdding();
    setSelectTag(false);
  };

  return (
    <>
      <motion.div
        initial={false}
        animate={data?.isAddingExpense ? "open" : "closed"}
        variants={{
          open: { y: 0 },
          closed: { y: "100%" },
        }}
        className="fixed bottom-0 h-screen  w-full sm:w-lg bg-white dark:bg-black p-5 bg-opacity-90 backdrop-blur-sm "
      >
        <div
          className="w-full flex justify-center items-center h-screen flex-col gap-10"
          style={{
            height: "90vh",
          }}
        >
          <div className="flex">
            <div>
              <h1 className="text-center text-sm text-gray-400">
                Today at {new Date().toDateString()}
              </h1>
              <input
                className="border-b border-zinc-200 bg-transparent outline-none text-center text-5xl w-52 font-bold "
                placeholder="0"
                type="number"
                min={0}
                required
              />
            </div>
          </div>
          <BsArrowDown className="w-6 h-6 text-gray-400" />
          <div
            className="flex cursor-pointer hover:tracking-wider transition-all items-center gap-5"
            onClick={() => setSelectTag(!isSelectTag)}
          >
            <Tag tag={tag} />
            <FiRotateCcw className="text-gray-400" />
          </div>
          <div className="flex gap-2">
            <button
              className=" bg-red-200 dark:bg-red-400 px-8  py-3 rounded-md hover:tracking-wider transition-all hover:shadow-md"
              onClick={closeAdding}
            >
              Cancel
            </button>
            <button className="bg-black dark:bg-white text-white dark:text-black px-8  py-3 rounded-md hover:tracking-wider transition-all hover:shadow-md">
              Next
            </button>
          </div>
        </div>
      </motion.div>
      <ListTags
        isSelectTag={isSelectTag}
        closeTag={() => {
          setSelectTag(false);
        }}
        selectTag={(tag: ITag) => {
          setTag(tag);
        }}
      />
    </>
  );
}

const Tag = ({ tag }: { tag: ITag | undefined }) => {
  if (tag) {
    let name = tag?.name.split(" ");
    return (
      <div className="flex gap-5 text-xl items-center">
        <span>{name[0]}</span>
        <h1>{name[1]}</h1>
      </div>
    );
  }
  return (
    <div className="flex gap-5 text-xl items-center text-gray-400">
      <BsTags />
      <h1>select your tag</h1>
    </div>
  );
};

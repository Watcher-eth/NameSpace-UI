import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { ImageIcon, Plus } from "lucide-react";
import { motion } from "framer-motion";
function CreateCoin() {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [image, setImage] = useState<string>();
  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    // Trigger a click event on the file input element
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    //TODO: Store Image
  };

  return (
    <div className="flex w-[100vw] h-[94vh] px-14  flex-col bg-[#0E0E0E] items-center justify-center">
      <div className="text-[2rem] text-white font-bold mt-[-4rem]">Create</div>

      <label htmlFor="imageUpload">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*,video/*"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
        <motion.div
          className="w-[20vw] h-[20vw] rounded-xl my-8 bg-[#1A1A1A] flex justify-center items-center"
          whileTap={{ scale: 0.95 }}
        >
          <div>
            <ImageIcon className=" h-8 w-8 stroke-white" />
          </div>
        </motion.div>
      </label>
      <div className=" flex flex-col space-y-[-0.1rem]">
        <div className="text-[1rem] text-white font-bold">Token Name</div>
        <input
          className="text-[1.8rem] text-gray-300 bg-transparent "
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Doge Coin"
        />
      </div>

      <div className=" flex flex-col mt-5 space-y-[-0.1rem] w-[19vw]">
        <div className="text-[1rem] text-white font-bold">Description</div>
        <textarea
          className="text-[1.2rem] h-[5rem] mt-1 text-gray-300 bg-transparent "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Your description goes here..."
        />
      </div>
      <Button className="rounded-full text-white hover:bg-[#242424] active:bg-[#242424] bg-[#242424] mt-10 w-[18vw] flex items-center">
        <Plus strokeWidth={3} className="stroke-white h-[1.2rem] w-[1.2rem]" />
        <div className="text-[1rem] ml-1">Create</div>
      </Button>
    </div>
  );
}

export default CreateCoin;

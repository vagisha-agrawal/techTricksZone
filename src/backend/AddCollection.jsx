import React, { useState } from "react";
import { addCollections } from "../services/collections";

const AddCollection = ({setModalOpen}) => {
  const [input, setInput] = useState({});
  const [imageFile, setImageFile] = useState("");
  const [filename, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const inputChange = ({ name, value }) => {
    let obj = { ...input };
    obj[name] = value;
    setInput(obj);
  };

  function handleOnChange(e) {
    const { target } = e;

    if (target.files && target.files[0]) {
      const selectedFile = target.files[0];

      // Read the file as Base64 for uploading and preview
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFile(base64String); // Base64 string for upload
        setImageFile(reader.result); // Set preview URL
      };
      reader.readAsDataURL(selectedFile); // Convert file to Base64

      // Set file name
      setFileName(selectedFile.name);
    }
  };

  const submit = () => {
    if(input.collectionName && input.collectionPhoto){
        addCollections({collectionName:input.collectionName, collectionPhoto: input.collectionPhoto})
        .then((res)=>{
            console.log("response:- ", res);
            if(res.status === 200 && res.data){
                setModalOpen("")
            }
        })
    }
  }
  return (
    <div className="flex w-full flex-col gap-y-4 py-[10px] items-center">
      <div className="flex flex-col items-start w-full">
        <div className="font-bold">Upload Collection Image(if any)</div>
        <input
          type="url"
          name="collectionPhoto"
          value={input.collectionPhoto}
          onChange={(e) => inputChange(e.target)}
          placeholder="Collection Pic Link"
          className="h-[50px] px-[5px] outline-0 w-full rounded"
        />
        {/* {!!imageFile ? (
          <div className="flex justify-start w-full gap-x-[10px] items-center">
            <div className="flex flex-col gap-y-2">
              <img
                src={imageFile}
                className="w-[200px] h-[120px] object-cover"
              />
              <div className="font-bold">
                Note: The image will display like this
              </div>
            </div>
            <div className="flex flex-col gap-y-[15px]">
              <div className="relative">
                <button className="bg-blue-600 text-white rounded-none py-[5px] px-[8px]">
                  Replace
                </button>
                <input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleOnChange}
                  className="absolute top-0 left-0 h-100 opacity-0"
                />
              </div>
              <button
                className="bg-red-600 text-white rounded-none py-[5px] px-[8px]"
                onClick={() => setImageFile("")}
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleOnChange}
            className=""
          />
        )} */}
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="font-bold">Collection Type</div>
        <input
          type="text"
          name="collectionName"
          value={input.collectionName}
          onChange={(e) => inputChange(e.target)}
          placeholder="Collection Type"
          className="h-[50px] px-[5px] outline-0 w-full rounded"
        />
      </div>
        <div className="flex w-full justify-center gap-x-2">
            <button className="bg-gray-600 font-bold text-white" onClick={()=>setInput({})}>Reset</button>
            <button className="bg-green-800 font-bold text-white" onClick={submit}>Submit</button>
        </div>
    </div>
  );
};

export default AddCollection;

import React, { useEffect, useState } from "react";
import { getCollections } from "../services/collections";
import { addServices } from "../services/services";

const AddServices = ({setModalOpen, option}) => {
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
    if((input.servicePhoto || input.servicePhotoCss) && input.serviceName && input.collectionType && input.tutorialLink && input.redirectionLink){
      addServices(input)
      .then((res)=>{
        console.log(res);
        if(res.status === 200 && res.data){
          setModalOpen("")
        }
      })
    }
  }

  return (
    <div className="flex w-full flex-col gap-y-4 py-[10px] items-center">
      <div className="flex flex-col items-start w-full">
        <div className="font-bold">Upload Service Pic (if any)</div>
        <input
          type="url"
          name="servicePhoto"
          value={input.servicePhoto}
          onChange={(e) => inputChange(e.target)}
          placeholder="Service Pic Link"
          className="h-[50px] px-[5px] outline-0 w-full rounded"
        />
      </div>
      <div className="flex items-center w-full gap-x-1">
        <div className="h-[1px] bg-gray-500 w-full "></div>
        <div className="text-gray-500">OR</div>
        <div className="h-[1px] bg-gray-500 w-full"></div>
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="font-bold">Add Text Css</div>
        <input
          type="text"
          name="servicePhotoCss"
          value={input.servicePhotoCss}
          onChange={(e) => inputChange(e.target)}
          placeholder="Service Pic Css"
          className="h-[50px] px-[5px] outline-0 w-full rounded"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="font-bold">Service Name</div>
        <input
          type="text"
          name="serviceName"
          value={input.serviceName}
          onChange={(e) => inputChange(e.target)}
          placeholder="Service Name"
          className="h-[50px] px-[5px] outline-0 w-full rounded"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="font-bold">Category</div>
        <select name="collectionType" value={input.collectionType} onChange={(e)=>inputChange(e.target)} className="h-[50px] w-full outline-0">
          <option>--select--</option>
          {option.map((v,i)=><option value={v.collectionName} key={i}>{v.collectionName}</option>)}
        </select>
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="font-bold">Tutorial Link</div>
        <input
          type="url"
          name="tutorialLink"
          value={input.tutorialLink}
          onChange={(e) => inputChange(e.target)}
          placeholder="Tutorial Link"
          className="h-[50px] px-[5px] outline-0 w-full rounded"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <div className="font-bold">Redirection Link</div>
        <input
          type="url"
          name="redirectionLink"
          value={input.redirectionLink}
          onChange={(e) => inputChange(e.target)}
          placeholder="Redirection Link"
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

export default AddServices;

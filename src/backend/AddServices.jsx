import React, { useEffect, useState } from "react";
import { getCollections } from "../services/collections";
import { addServices, updateService } from "../services/services";
import Select from 'react-select'
import { useRecoilState } from "recoil";
import { toastState } from "../state/AppAtom";

const AddServices = ({setModalOpen, option, idObj = undefined}) => {
  const [input, setInput] = useState({});
  const [colourOptions, setColourOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [imageFile, setImageFile] = useState("");
  const [filename, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [showToast, setShowToast] = useRecoilState(toastState);

  const inputChange = ({ name, value }) => {
    let obj = { ...input };
    obj[name] = value;
    setInput(obj);
  };

  useEffect(()=>{
    if(option.length){
      let arr = option.map((v)=>{
        let obj = {};
        obj['value'] = v.collectionName.toLowerCase()
        obj['label'] = v.collectionName
        return obj
      })
      setColourOptions(arr)
    }
  },[option])

  useEffect(()=>{
    if(Object.keys(idObj).length){
      setInput(idObj)
    }
  },[idObj])

  console.log("id obj:- ", idObj)

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
      if(Object.keys(idObj).length){
        updateService(idObj._id, input)
        .then((res)=>{
          if(res.status === 200 && res.data){
            setShowToast({type:'success', message: res.data.message})
            setModalOpen()
          }
        })
        .catch((err)=>console.error(err))
      } else {
        addServices(input)
        .then((res)=>{
          console.log(res);
          if(res.status === 200 && res.data){
            setShowToast({type:'success', message: res.data.message})
            setModalOpen()
          }
        })
      }
    }
  }

  const selectChange = value => {
    let obj = {...input}
    obj['collectionType'] = JSON.stringify(obj.collectionType ? [...obj.collectionType , value[value.length - 1].value] : [value[value.length - 1].value])
    setInput(obj);
    // console.log(value);
    setSelected(value)
  }

  return (
    <>
      <div className="font-bold w-full mt-[20px]">For Image</div>
      <div className="p-2 border border-gray-500 flex flex-col gap-y-4 w-full">
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
      </div>
      <div className="flex w-full flex-col gap-y-4 py-[10px] items-center mt-[10px]">
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
          <Select
            isMulti
            name="collectionType"
            options={colourOptions}
            className="basic-multi-select w-full"
            classNamePrefix="select"
            onChange={selectChange}
            value={selected}
          />
          
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
    </>
  );
};

export default AddServices;

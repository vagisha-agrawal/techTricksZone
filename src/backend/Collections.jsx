import React, { useEffect, useState } from "react";
import Icons from "../components/Icons";
import AddCollection from "./AddCollection";
import { getCollections } from "../services/collections";
import { useRecoilState } from "recoil";
import { navigateState } from "../state/AppAtom";
import { Link } from "react-router-dom";

const Collections = () => {
  const [data, setData] = useState([]);
  const [openModal, setModalOpen] = useState("");
  const [nav, setNav] = useRecoilState(navigateState);
  const [idObj, setIdObj] = useState({})

  useEffect(() => {
    getCollections()
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data) {
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setNav("collection");
  }, []);

  const editCollection = (obj) => {
    setIdObj(obj);
    setModalOpen("Edit")
  }

  const setModalClose = () => {
    setModalOpen("");
    setIdObj({})
    getCollections()
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data) {
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex w-full items-center justify-center py-[20px] relative">
      <div className="w-[80%] flex flex-col items-center">
        <div className="w-full flex justify-start">
          <button
            className="bg-green-700 text-white"
            onClick={() => setModalOpen("Add")}
          >
            Add Collection
          </button>
        </div>
        <div className="text-2xl font-bold">All Collections</div>

        {data.length ? (
          <div className="w-full flex justify-center gap-4 flex-wrap py-[30px]">
            {data.map((v, i) => (
              <div
                className="flex flex-col w-[300px] border border-[#0a1743] gap-y-[15px] pb-[10px]"
                key={i}
              >
                <img
                  src={v.collectionPhoto}
                  className="w-full h-[150px] object-cover"
                />
                <div className="font-semibold text-xl text-center px-[5px]">
                  {v.collectionName}
                </div>
                <div className="flex w-full justify-center gap-2">
                  <button className="bg-green-600 py-1 px-2 rounded text-white" onClick={()=>editCollection(v)}>Edit</button>
                  <button className="bg-red-600 py-1 px-2 rounded text-white">Delete</button>
                </div>
                {/* <div className="flex w-full justify-center"><div className='w-auto bg-[#0a1743] text-white px-[10px] py-[5px] rounded'>View</div></div> */}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <div className="text-xl font-bold">No Data Found</div>
          </div>
        )}
      </div>
      {!!openModal ? (
        <div className="fixed top-0 left-0 flex w-full justify-center items-center h-[98vh] bg-[#0000000f]">
          <div className="w-[500px] flex flex-col bg-sky-100 p-[10px] rounded">
            <div className="flex w-full justify-between">
              <div className="text-xl font-bold">{openModal} Collection</div>
              <span onClick={() => setModalOpen("")}>
                <Icons string="close" color="red" />
              </span>
            </div>
            <AddCollection setModalOpen={setModalClose} idObj={idObj}/>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Collections;

import React, { useEffect, useState } from "react";
import { getServices } from "../services/services";
import AddServices from "./AddServices";
import Icons from "../components/Icons";
import { deleteCollections, getCollections } from "../services/collections";
import { navigateState, toastState } from "../state/AppAtom";
import { useRecoilState } from "recoil";

const AdminServices = () => {
  const [data, setData] = useState([]);
  const [option, setOption] = useState([]);
  const [openModal, setModalOpen] = useState("");
  const [nav, setNav] = useRecoilState(navigateState);
  const [idObj, setIdObj] = useState({});
  const [showToast, setShowToast] = useRecoilState(toastState);

  useEffect(() => {
    getCollections()
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data) {
          setOption(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
      setNav("service")
  }, []);

  useEffect(() => {
    getServices()
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data) {
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editCollection = (obj) => {
    setIdObj(obj);
    setModalOpen("Edit")
  }

  const deleteC = id =>{
    deleteService(id)
    .then((res)=>{
      if(res.data && res.status === 200){
        setShowToast({type:'success', message: res.data.message})
        setModalClose()
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const setModalClose = () => {
    setModalOpen("");
    setIdObj({})
    getServices()
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
          {option.length ? (
            <button
              className="bg-green-700 text-white"
              onClick={() => setModalOpen("Add")}
            >
              Add Service
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="text-2xl font-bold">All Services</div>

        {data.length ? (
          <>
            <div className="flex w-full justify-center gap-3">
              {data.map((v, i) => (
                <div
                    className="flex flex-col w-[300px] border border-[#0a1743] pb-[10px]"
                    key={i}
                  >
                    <div className="min-h-[200px] h-[200px] w-full flex justify-center items-center bg-white">
                      {v.servicePhoto ?<img src={v.servicePhoto} className="w-full object-cover h-full" /> : <div style={JSON.parse(v.servicePhotoCss)}>{v.serviceName}</div> }
                    </div>
                    <div className="flex flex-col w-full justify-between h-full">
                      <div className="font-semibold text-xl text-center px-[5px] bg-sky-600 text-white">
                        {v.serviceName}
                      </div>
                      <div className="font-semibold text-xl text-center px-[5px] w-full flex flex-col mt-[15px]">
                        <span className="underline">Tutorial Link: </span>
                        {v.tutorialLink}
                      </div>
                      <div className="font-semibold text-xl text-center px-[5px] w-full flex flex-col mt-[15px]">
                        <span className="underline">Redirection Link: </span>
                        {v.redirectionLink}
                      </div>
                      <div className="flex w-full justify-center gap-2 mt-[15px]">
                        <button className="bg-green-600 py-1 px-2 rounded text-white" onClick={()=>editCollection(v)}>Edit</button>
                        <button className="bg-red-600 py-1 px-2 rounded text-white" onClick={()=>deleteC(v._id)}>Delete</button>
                      </div>
                    </div>
                    {/* <div className="flex w-full justify-center"><div className='w-auto bg-[#0a1743] text-white px-[10px] py-[5px] rounded'>View</div></div> */}
                  </div>
                
              ))}
            </div>
          </>
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
              <div className="text-xl font-bold">{openModal} Service</div>
              <span onClick={() => setModalOpen("")}>
                <Icons string="close" color="red" />
              </span>
            </div>
            <AddServices setModalOpen={setModalClose} option={option} idObj={idObj}/>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdminServices;

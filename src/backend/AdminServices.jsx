import React, { useEffect, useState } from "react";
import { getServices } from "../services/services";
import AddServices from "./AddServices";
import Icons from "../components/Icons";
import { getCollections } from "../services/collections";

const AdminServices = () => {
  const [data, setData] = useState([]);
  const [option, setOption] = useState([]);
  const [openModal, setModalOpen] = useState("");

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
        <div className="mt-6 flex rounded-t-md items-center gap-x-[1px]">
          <div className="w-[200px] bg-gray-300 px-[5px] font-bold py-[5px]">
            Image
          </div>
          <div className="w-[200px] bg-gray-300 px-[5px] font-bold py-[5px]">
            Name
          </div>
          <div className="w-[200px] bg-gray-300 px-[5px] font-bold py-[5px]">
            Tutorial Link
          </div>
          <div className="w-[200px] bg-gray-300 px-[5px] font-bold py-[5px]">
            Redirect Link
          </div>
        </div>
        {data.length ? (
          data.map((v, i) => (
            <div
              className="mt-6 flex rounded-t-md items-center gap-x-[1px]"
              key={i}
            >
              <div className="w-[200px] px-[5px] font-bold py-[5px]">
                {v.servicePhoto ?<img src={v.servicePhoto} className="w-full" /> : <div style={JSON.parse(v.servicePhotoCss)}>{v.serviceName}</div> }
              </div>
              <div className="w-[200px] px-[5px] font-bold py-[5px]">
                {v.serviceName}
              </div>
              <div className="w-[200px] px-[5px] font-bold py-[5px]">
                {v.tutorialLink}
              </div>
              <div className="w-[200px] px-[5px] font-bold py-[5px]">
                {v.redirectionLink}
              </div>
            </div>
          ))
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
            <AddServices setModalOpen={setModalOpen} option={option} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdminServices;

import AdminLayout from "../AdminDashboard/AdminLayout";
import { data } from "./data";
import { MdOutlineMail, MdOutlineLocalPhone } from "react-icons/md";

const Card = () => {
  return (
    <>
      <AdminLayout>
        <h1 className="bg-green-400 text-center font-semibold pt-4">My Team</h1>
        <div className=" px-16 py-6 bg-green-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 items-center justify-center ">
          {data.map((item) => (
            <div className="px-4 py-4 h-68 bg-gray-200 shadow rounded-lg ">
              <div className="w-24 h-24 my-2 mx-auto items-center justify-center">
                <img
                  src={item.image}
                  alt="hi"
                  className="w-full  h-full object-cover  rounded-full"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold py-2">{item.name}</p>
                <p className="pb-2 ">{item.jobProfile}</p>
                <p className="role bg-green-400 hover:bg-green-600 cursor-pointer py-2 w-16 mx-auto my-0 border-2 rounded-lg ">
                  Admin
                </p>
              </div>
              <div className="flex gap-2 py-2">
                <div className=" flex items-center justify-center  w-1/2 bg-gray-400 hover:bg-green-600 cursor-pointer py-2 rounded-lg">
                  <span className="px-2">
                    <MdOutlineMail />
                  </span>
                  <span>Email</span>
                </div>
                <div className="flex items-center justify-center  w-1/2 bg-gray-400 hover:bg-green-600 cursor-pointer py-2 rounded-lg">
                  <span className="px-2">
                    <MdOutlineLocalPhone />
                  </span>
                  <span>Call</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AdminLayout>
    </>
  );
};

export default Card;

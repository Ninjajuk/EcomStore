import RightProfileDiv from "./RightProfileDiv";
import LeftProfileDiv from "./LeftProfileDiv";
import Navbar1 from "../../Navbar/Navbar1";

export const ProfileDiv = ({ children }) => {
  return (
    <>
      <Navbar1 />
      <div className="w-full" style={{ height: "calc(100vh - 4rem)" }}>
        <div className="max-h-full w-full flex flex-col md:flex-row gap-3  ">
          <div className="w-full max-h-full md:w-1/5 bg-indigo-400 ">
            <LeftProfileDiv />
          </div>
          <div className="w-full  md:w-4/5   ">{children}</div>
        </div>
      </div>
    </>
  );
};

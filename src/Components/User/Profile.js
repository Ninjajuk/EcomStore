import PersonalInformation from "./MyProfile/PersonalInformation";

const Profile = () => {
  return (
    <>
      <h1>Hi</h1>
      <div className="flex w-full h-screen">
        <div className="w-1/4 bg-gray-400">Samsuddin Ansari</div>
        <div className="w-3/4 bg-red-400">
          <PersonalInformation />
        </div>
      </div>
    </>
  );
};
export default Profile;

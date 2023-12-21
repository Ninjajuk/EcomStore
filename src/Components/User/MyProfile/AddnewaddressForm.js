import { useState } from "react";
import statesData from "./states.json"; // Path to your states.json file
import { useSnackbar, SnackbarProvider } from "notistack";
export const AddnewAddressForm = ({ handleCancel }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedState, setSelectedState] = useState("");
  const initialFormDetails = {
    name: "",
    email: "",
    phone: "",
    state: "",
    postalCode: "",
    fullAddress: "",
    landMark: "",
    city: "" // Add this field
  };
  const [user, setUsers] = useState(initialFormDetails);
  const handleChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    enqueueSnackbar("Address added successfully!");
    try {
      const registrationData = {
        ...user,
        state: selectedState
        // ConfirmPassword: user.ConfrimPassword // Fix typo here: ConfrimPassword -> ConfirmPassword
      };

      const response = await fetch("http://localhost:3000/addAddress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(registrationData)
      });
      console.log(registrationData);
      if (response.ok) {
        console.log(registrationData);
        // setUsers(initialFormDetails);
        setUsers((prevAddresses) => [...prevAddresses, registrationData]); // Add the new address to the state
        handleCancel();
        // Show success message here
        enqueueSnackbar("Address added successfully!");
        alert("Address added successfully!");
      } else {
        console.error("Registration failed:", response.status);
        // Display an appropriate error message to the user
      }
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error and display an appropriate message to the user
    }
  };

  return (
    <>
      <SnackbarProvider>
        <form
          className="max-h-full overflow-y-auto bg-white px-5 py-12 "
          // noValidate
          onSubmit={handleSubmit}
        >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                      // {...register('name', {
                      //   required: 'name is required',
                      // })}
                      id="name"
                      className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {/* {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )} */}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      // {...register('email', {
                      //   required: 'email is required',
                      // })}
                      type="email"
                      className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {/* {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )} */}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full address
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="fullAddress"
                      name="fullAddress"
                      value={user.fullAddress}
                      onChange={handleChange}
                      // {...register('address', {
                      //   required: 'address is required',
                      // })}
                      className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {/* {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )} */}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      // {...register('phone', {
                      //   required: 'phone is required',
                      // })}
                      type="tel"
                      className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {/* {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )} */}
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    LandMark
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="landMark"
                      value={user.landMark}
                      onChange={handleChange}
                      // {...register('street', {
                      //   required: 'street is required',
                      // })}
                      id="street"
                      className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {/* {errors.street && (
                <p className="text-red-500">
                  {errors.street.message}
                </p>
              )} */}
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      value={user.city}
                      onChange={handleChange}
                      // {...register('city', {
                      //   required: 'city is required',
                      // })}
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {/* {errors.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )} */}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select State</option>
                      {statesData.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="pinCode"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postalCode"
                      value={user.postalCode}
                      onChange={handleChange}
                      // {...register('pinCode', {
                      //   required: 'pinCode is required',
                      // })}
                      id="pinCode"
                      className="block w-full bg-gray-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {/* {errors.pinCode && (
                <p className="text-red-500">
                  {errors.pinCode.message}
                </p>
              )} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => enqueueSnackbar("Added Successfully")}
              >
                Add Address
              </button>
              <button
                onClick={handleCancel}
                className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </SnackbarProvider>
    </>
  );
};

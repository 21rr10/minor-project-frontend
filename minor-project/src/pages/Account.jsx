import React from 'react';

const Account = () => {
  // Sample user data
  const user = {
    name: 'Ritesh Ranjan',
    birthday: '7/10/2003',
    gender: 'MALE',
    maritalStatus: 'Married',
    address: null,
    pincode: null,
    state: 'Odisha'
  };

  // Profile fields to display
  const profileFields = [
    { label: 'NAME', value: user.name },
    { label: 'BIRTHDAY', value: user.birthday },
    { label: 'GENDER', value: user.gender },
    { label: 'MARITAL STATUS', value: user.maritalStatus },
    { label: 'YOUR ADDRESS', value: user.address, addButton: true },
    { label: 'PINCODE', value: user.pincode, addButton: true },
    { label: 'STATE', value: user.state }
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-white p-4 shadow">
        {/* Profile Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-lg bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white text-2xl font-bold relative">
            RR
            <button className="absolute bottom-1 right-1 bg-white rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>

            </button>
          </div>
          <h2 className="mt-2 font-bold">{user.name}</h2>
          <p className="text-gray-500 text-sm">PERSONAL PROFILE</p>
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          <div className="p-2 rounded bg-blue-100 text-blue-600">Profile</div>
          <div className="p-2 rounded hover:bg-gray-100">Login Details</div>
          <div className="p-2 rounded hover:bg-gray-100">Logout</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded shadow p-6">
          {/* Header with edit button */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Profile</h1>
             </div>
            <button className="px-3 py-1 border border-blue-500 rounded text-blue-500">
              EDIT
            </button>
          </div>

          {/* Profile Information */}
          <div>
            {profileFields.map((field, index) => (
              <div key={index} className="border-b py-3 last:border-0">
                <div className="flex">
                  <div className="w-1/3">
                    <p className="text-gray-500">{field.label}</p>
                  </div>
                  <div className="w-2/3">
                    {field.value ? (
                      <p className="font-medium">{field.value}</p>
                    ) : field.addButton ? (
                      <button className="text-blue-500">+ Add</button>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

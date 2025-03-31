// import React, { useState } from 'react';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     travelInterest: '',
//     message: '',
//     consent: false
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Validation
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = 'First name is required';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required';
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }
//     if (!formData.travelInterest) newErrors.travelInterest = 'Please select your travel interest';
//     if (!formData.message) newErrors.message = 'Message is required';
//     if (!formData.consent) newErrors.consent = 'You must consent to be contacted';

//     if (Object.keys(newErrors).length === 0) {
//       // Form submission logic would go here
//       setIsSubmitted(true);
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-indigo-50" style={{
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       margin: 0,
//       padding: 0,
//       overflow: "auto"
//     }}>
//       {/* Header Banner */}
//       <div className="bg-indigo-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-bold">Contact Us</h1>
//         </div>
//       </div>
      
//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto px-6 py-12">
//         <div className="mb-10">
//           <h2 className="text-3xl font-bold text-indigo-900 mb-4">Contact Our Travel Experts</h2>
//           <p className="text-lg text-gray-700">We're here to help plan your dream vacation and answer any questions.</p>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6 mb-10 border-l-4 border-indigo-500">
//           <div className="flex items-center">
//             <div className="bg-indigo-100 p-3 rounded-full mr-4">
//               <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-indigo-800">Message us</h3>
//               <p className="text-gray-600">Chat with our travel assistant or leave a message for an agent</p>
//             </div>
//           </div>
//         </div>

//         {isSubmitted ? (
//           <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center shadow-md">
//             <h3 className="text-2xl font-semibold text-green-700 mb-3">Message Sent!</h3>
//             <p className="text-green-600">Thanks for reaching out. Our travel experts will be in touch soon to help plan your adventure.</p>
//           </div>
//         ) : (
//           <div className="bg-white rounded-lg shadow-md p-8 mb-10">
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}}
//                   />
//                   {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
//                 </div>
//                 <div>
//                   <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className={w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}}
//                   />
//                   {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}}
//                 />
//                 {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="travelInterest" className="block text-sm font-medium text-gray-700 mb-1">Travel Interest</label>
//                 <select
//                   id="travelInterest"
//                   name="travelInterest"
//                   value={formData.travelInterest}
//                   onChange={handleChange}
//                   className={w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${errors.travelInterest ? 'border-red-500' : 'border-gray-300'}}
//                 >
//                   <option value="">Select your travel interest</option>
//                   <option value="beach">Beach Getaways</option>
//                   <option value="adventure">Adventure Travel</option>
//                   <option value="cultural">Cultural Experiences</option>
//                   <option value="luxury">Luxury Vacations</option>
//                   <option value="family">Family Trips</option>
//                   <option value="honeymoon">Honeymoon Packages</option>
//                   <option value="other">Other</option>
//                 </select>
//                 {errors.travelInterest && <p className="mt-1 text-sm text-red-500">{errors.travelInterest}</p>}
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us about your travel plans</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Where do you want to go? When are you planning to travel? Any specific requirements?"
//                   className={w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}}
//                 ></textarea>
//                 {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="consent"
//                       name="consent"
//                       type="checkbox"
//                       checked={formData.consent}
//                       onChange={handleChange}
//                       className={w-4 h-4 rounded border-gray-300 focus:ring-indigo-500 ${errors.consent ? 'border-red-500' : ''}}
//                     />
//                   </div>
//                   <div className="ml-3">
//                     <label htmlFor="consent" className="text-sm text-gray-700">I consent to receiving travel offers and information</label>
//                     {errors.consent && <p className="mt-1 text-sm text-red-500">{errors.consent}</p>}
//                   </div>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
//               >
//                 <span>Send Message</span>
//                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//               </button>
//             </form>
//           </div>
//         )}

//         <div className="mt-12">
//           <h3 className="text-2xl font-semibold text-indigo-800 mb-6">Other ways to connect</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-indigo-500">
//               <div className="flex justify-center mb-4">
//                 <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
//                 </svg>
//               </div>
//               <h4 className="text-lg font-semibold text-indigo-600 mb-2">Travel Community</h4>
//               <p className="text-gray-600">Connect with fellow travelers and share experiences</p>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-indigo-500">
//               <div className="flex justify-center mb-4">
//                 <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
//                 </svg>
//               </div>
//               <h4 className="text-lg font-semibold text-indigo-600 mb-2">Booking Support</h4>
//               <p className="text-gray-600">Get help with existing reservations or changes</p>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-indigo-500">
//               <div className="flex justify-center mb-4">
//                 <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                 </svg>
//               </div>
//               <h4 className="text-lg font-semibold text-indigo-600 mb-2">Call our Travel Experts</h4>
//               <p className="text-gray-600">Get personalized travel advice and recommendations</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
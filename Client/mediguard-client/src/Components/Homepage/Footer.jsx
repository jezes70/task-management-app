

const Footer = () => {
  return (
   <>
   <div className="flex justify-center items-center gap-x-6">
  <a href="#" className=" text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600">
    <span className="text-sm text-blue-500">Facebook</span>
   
  </a>
  <a href="#" className=" text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-600">
    <span className="text-sm text-purple-500">Instagram</span>
   
  </a>
  <a href="#" className=" text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-400">
    <span className="text-sm text-blue-300">Twitter</span>
  
  </a>
  <a href="#" className=" text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800">
    <span className="text-sm text-gray-700">GitHub</span>
   
  </a>
  <a href="#" className=" text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600">
    <span className="text-sm text-red-500">YouTube</span>
  
  </a>
</div>
<div className="mt-4 text-center">
  <p className="text-gray-600 text-sm">
    &copy; 2020 Your Company, Inc. All rights reserved.
  </p>
</div>

   </>
  )
}

export default Footer
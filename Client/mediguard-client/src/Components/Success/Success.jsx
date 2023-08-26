

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Verification Successful</h1>
        <p className="text-sm mb-6 text-center">
          Your account has been successfully verified.
        </p>
        <div className="mt-6">
          <button
            className="block w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-offset-2"
            onClick={() => {
              // Handle button click action, like redirecting to a dashboard or home page
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;

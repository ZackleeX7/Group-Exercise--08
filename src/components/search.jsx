function Search({ placeholder }) {
    return (
        <div className="flex justify-center mt-4">
            <input
            type="text"
            placeholder={placeholder}
            className="border border-gray-400 rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
}

export default Search;
function Logo({ text }) {
    return (
      <div className="flex justify-center items-center p-4">
        <h1 className="text-3xl font-bold text-red-500 drop-shadow-md">
            {text}
        </h1>
      </div>
    );
}

export default Logo;
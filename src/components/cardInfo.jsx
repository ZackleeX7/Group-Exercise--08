function CardInfo({ name, type }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 m-4 w-60 text-center">
            <h2 className="text-x1 font-semibold">{name}</h2>
            <p className="text-gray-600">Type: {type}</p>
        </div>
    );
}

export default CardInfo;
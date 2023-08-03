const Card = (prop) => {
  const { Title, Date, Sponsor } = prop.data
  return (
    <div className="grow w-1/4 m-3 p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="underline text-lg font-bold">{Title}</div>
      <p className="text-base">
        <span className="font-bold italic">Detail: </span>
        {Sponsor}
      </p>
      <p className="text-base">
        <span className="font-bold italic">Date: </span>
        {Date}
      </p>
    </div>
  )
}
export default Card

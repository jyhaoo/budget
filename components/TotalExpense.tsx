export default function TotalExpense() {
  return (
    <div className="h-56 flex justify-center items-center flex-col mt-20">
      <h1 className="text-center text-gray-500 dark:Text-gray-400">
        Spent this month
      </h1>
      <div className="flex justify-center mt-5 text-red-500">
        <h1 className="text-4xl font-bold">{"$ -"}</h1>
        <h1 className="text-center text-6xl">5</h1>
        <h1 className="text-center text-4xl">.00</h1>
      </div>
    </div>
  );
}

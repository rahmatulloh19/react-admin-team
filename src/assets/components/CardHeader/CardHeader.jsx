function CardHeader() {
  return (
    <section>
      <ul className="flex items-center justify-between gap-8">
        <li className="group w-64 py-6 px-6 flex flex-col items-center justify-center border-2 rounded-lg hover:border-blue-600  bg-white transition">
          <span className="font-bold text-lg tracking-widest mb-3 text-gray-400 group-hover:text-blue-600">
            Unresolved
          </span>
          <strong className="group text-4xl font-bold -tracking-tighter group-hover:text-blue-600">
            60
          </strong>
        </li>
        <li className="group w-64 py-6 px-6 flex flex-col items-center justify-center border-2 rounded-lg hover:border-blue-600 bg-white transition">
          <span className="font-bold text-lg tracking-widest mb-3 text-gray-400 group-hover:text-blue-600">
            Overdue
          </span>
          <strong className="group text-4xl font-bold -tracking-tighter group-hover:text-blue-600">
            16
          </strong>
        </li>
        <li className="group w-64 py-6 px-6 flex flex-col items-center justify-center border-2 rounded-lg hover:border-blue-600 bg-white transition">
          <span className="font-bold text-lg tracking-widest mb-3 text-gray-400 group-hover:text-blue-600">
            Open
          </span>
          <strong className="group text-4xl font-bold -tracking-tighter group-hover:text-blue-600">
            43
          </strong>
        </li>
        <li className="group w-64 py-6 px-6 flex flex-col items-center justify-center border-2 rounded-lg hover:border-blue-600 bg-white transition">
          <span className="font-bold text-lg tracking-widest mb-3 text-gray-400 group-hover:text-blue-600">
            On hold
          </span>
          <strong className="group text-4xl font-bold -tracking-tighter group-hover:text-blue-600">
            64
          </strong>
        </li>
      </ul>
    </section>
  );
}

export default CardHeader;

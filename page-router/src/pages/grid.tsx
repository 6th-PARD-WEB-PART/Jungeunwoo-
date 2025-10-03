export default function test() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
        {" "}
        Responsive Dsign Example
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Respinsive Box 1</h3>
          <p className="text-gray-500">
            This box changes layout on different screen sizes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Respinsive Box 2</h3>
          <p className="text-gray-500">
            This box changes layout on different screen sizes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Respinsive Box 3</h3>
          <p className="text-gray-500">
            This box changes layout on different screen sizes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Respinsive Box 4</h3>
          <p className="text-gray-500">
            This box changes layout on different screen sizes.
          </p>
        </div>
      </div>
    </section>
  );
}

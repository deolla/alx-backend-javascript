export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  function* employeeIterator() {
    for (const department of departments) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: employeeIterator,
  };
}

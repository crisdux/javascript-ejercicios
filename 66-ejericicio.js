// Se le proporciona una serie de objetos que representan una colección de empleados, cada uno con un nombre, salario y departamento. Su tarea es utilizar mapear, filtrar y reducir para calcular el salario promedio de cada departamento y luego devolver una serie de objetos que contengan solo los departamentos que tienen un salario promedio superior a 65000.

const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];
  
  const groupByDepartament = (arr) => {
    return Object.groupBy(arr, ({department}) => department)
  }
  
  console.log(groupByDepartament(employees))
  
  const avgPriceByCategory = (obj) => {
    return Object.keys(obj).map((department) => {
      const prices = obj[department];
      const average = prices.reduce((acc, current) => acc + current.salary, 0) / prices.length;
      return { department, average };
    }).filter(({average}) => average > 65000)
  }
  
  console.log(avgPriceByCategory(groupByDepartament(employees)))
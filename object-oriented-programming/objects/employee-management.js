/*

Crea un sistema de gestión de empleados que permita agregar empleados, calcular el salario mensual, 
aplicar aumentos y buscar empleados por nombre o departamento. Cada empleado debe tener un 
identificador único, nombre, puesto, salario base y departamento.

Requisitos:

- Crea una función Company que genere un objeto de empresa.
- La empresa debe tener un array de empleados.

Métodos:

addEmployee(id, name, position, baseSalary, department): Agrega un nuevo empleado a la empresa.
calculateMonthlySalary(id): Calcula el salario mensual de un empleado (salario base + bonos).
applyRaise(id, percentage): Aplica un aumento porcentual al salario base de un empleado.
searchEmployee(query): Busca empleados por nombre o departamento y devuelve los resultados.


*/


function company() {

    const employees = []

    return {
        addEmployee(id, name, position, baseSalary, department, bonus) {
            const employee = {
                id,
                name,
                position,
                department,
                baseSalary,
                bonus
            }
            employees.push(employee)

        },
        calculateMonthlySalary(id) {
            const employee = employees.find(emp => emp.id === id)
            if (employees) {
                return employee.baseSalary + employee.bonus
            } else { return null }
        },

        applyRaise(id, percentage) {
            const employee = employees.find(emp => emp.id === id)
            if (employee) {
                return employee.baseSalary += employee.baseSalary * (percentage / 100)

            }

        },
        searchEmployee(query) {
            return employee.filter(emp =>
                emp.name.includes(query) || emp.department.includes(query)
            )
        },

        getEmployees (){
            return employees
        }

    }

}

const myCompany = company();

myCompany.addEmployee(1, 'Marco Alvarez', 'Software Engineer', 5000, 'IT', 3400)
myCompany.addEmployee(2, 'Diego Valverde', 'Civil Engineer', 3000, 'Facilities')

console.log(myCompany.calculateMonthlySalary(1))
console.log(myCompany.applyRaise(1, 10))
console.log(myCompany.getEmployees())

// Create an Employee as a parent class
// Create a FulltimeEmployee and ParttimeEmployee as Child of Employee Class
// Create a method in that class (Employee) to add working hour per day
// Create a method in that class (Employee) to calculate total salary
// Full-Time = 100.000/hour | 75.000/hour Overtime more than 6 hours
// Part-Time = 50.000/hour | 35.000/hour Overtime more than 6 hours
// Use Inheritance concept

// wagePerHour
// overtimeWagePerHour
// workingHour

class Employee {
  wagePerHour = 0
  overtimeWagePerHour = 0
  workingHours = 0

  addWorkingHours = (newWorkingHours) => {
    if (newWorkingHours < 1) {
      throw new Error("Working hours harus lebih dari 0")
    }
    this.workingHours += newWorkingHours
  }

  calculateTotalSalary = () => {
    // 1. Tanpa lembur
    if (this.workingHours <= 6) {
      return this.workingHours * this.wagePerHour
    }

    // 2. Dengan Lembur
    return (
      this.wagePerHour * 6 + this.overtimeWagePerHour * (this.workingHours - 6)
    )
  }

  setWagePerHour = (newWagePerHour) => {
    this.wagePerHour = newWagePerHour
  }

  setOvertimeWagePerHour = (newOvertimeWagePerHour) => {
    this.overtimeWagePerHour = newOvertimeWagePerHour
  }
}

class FulltimeEmployee extends Employee {
  wagePerHour = 100000
  overtimeWagePerHour = 75000
}

class PartTimeEmployee extends Employee {
  wagePerHour = 10000
  overtimeWagePerHour = 1000
}

// const fulltime = new FulltimeEmployee()
// // fulltime.setWagePerHour()
// fulltime.addWorkingHours(3)
// console.log(fulltime.calculateTotalSalary())

const parttime = new PartTimeEmployee()
// fulltime.setWagePerHour()
parttime.addWorkingHours(7)
console.log(parttime.calculateTotalSalary())

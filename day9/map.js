const myMap = new Map()

myMap.set("fullName", "Doraemon")
myMap.set("phoneNumber", "123456")
myMap.delete("fullName")

console.log(myMap.get("fullName"))

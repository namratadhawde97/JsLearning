let addressStr = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev","DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city":"Innsbruck"
        "country":"Austria"
    },
    "referred-by": "E0012"
}`;
const address = JSON.parse(addressStr);
console.log(address.role);
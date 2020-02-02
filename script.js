var person = {
    name : "vlad",
    age: 4,
    family:[
        {
            brothers:[
                {
                    name : "Yarik",
                    age: 2,
                },
                {
                    name : "Andrey",
                    age: 1,
                    friends:[
                        {
                            name: 'sssss',
                            age: 33
                        }
                    ]
                },
            ],
            sisters: [],
            mother: {
                name : "Katya",
                age: 15,
                friends:[
                    {
                        name: 'sssss1',
                        age: 3,
                        friends:[
                            {
                                name: 'Katya',
                                age: 31
                            }
                        ]
                    }
                ]
            },
            father:{
                name : "Roman",
                age: 16,
            }
        }
    ]
};
var array = [];
calc(person);
function calc(obj, arr) {
    for (var key in obj) {
        if (typeof obj[key] === "number") {
            var b = array.push(obj[key]);
        } if (typeof obj[key] === "object") {
            calc(obj[key])
        }
    }
}
var num = array.reduce(function (a,b) {
return a+b
})
console.log (array);
console.log (num);


let x = [
	{
		id: 1,
		type: "a"
	},
	{
		id: 2,
		type: "b"
	},
	{
		id: 3,
		type: "b"
    },
    {
		id: 4,
		type: "c"
	},
	{
		id: 5,
		type: "a"
	},
] 

function convertToGoalObjectStructure (arr) {

    let goalStructure = {};

    arr.forEach(item => {
        if (goalStructure[item.type] === undefined ) {
            goalStructure[item.type] = [];
        }
        goalStructure[item.type].push({ id: item.id, type: item.type });
    });

    return goalStructure;

}

let result = convertToGoalObjectStructure(x);
console.log("Final goal object:", result);


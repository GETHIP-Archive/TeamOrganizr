function assignGroups(people, amount) {
	var groups = [];
	var num = people.length/amount;
	while (people.length > 0) {
		var person = people.splice(0, 1)[0];
		scores = _.map(people, function(currentPerson) {
			return {
				person: currentPerson,
				score: calculateSimilarity(currentPerson.strengths, person.strengths)
			};
		});
		scores.sort(function (a, b) {
			return a.score - b.score;
		}
		);
		var currentPeople = scores.splice(scores.length - (num - 1), (num - 1));
		var group = _.map(currentPeople, function(currentPerson) {
			return currentPerson.person;
		});
		group.push(person);
		people = _.map(scores, function(score) {
			return score.person;
		});
		groups.push(group);	
	}
	return groups;
};

function calculateSimilarity(strengthOne, strengthTwo) {
	var score = 0;
	for (var i = 0; i < strengthOne.length; i++) {
		var point = strengthTwo.indexOf(strengthOne[i]);
		if (point == -1)
			score += 5;
		else
			score += Math.abs(point - i);
	}
	return score;
};

export function testGroups() {
	let people = [
	{
		name: "Grace",
		strengths: ["Futuristic", "Strategic", "Achiever", "Focus", "Competition"]
	},
	{
		name: "Cooper",
		strengths: ["Competition", "Input", "Learner", "Achiever", "Intellection"]
	},
	{
		name: "Melanie",
		strengths: ["Relator", "Learner", "Strategic", "Achiever", "Responsbility"]
	},
	{
		name: "James",
		strengths: ["Activator", "Woo", "Relator", "Intellection", "Empathy"]
	}
	];
	groups = assignGroups(people, 2);
	console.log(groups);
}
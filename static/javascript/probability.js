


const prisoner_number = 10;
let box = new Array(prisoner_number)
for(var i = 0; i < prisoner_number; i++){box[i] = i;}

let total = 0
let challenges_num  = 1000
let challenges = new Array(challenges_num)
for(var i = 0; i < challenges.length; i++){
	challenges[i] = prisoner_open_box(prisoner_number);
	console.log("number of challenges", i+1, "is try.","They are", challenges[i] ? "sucess" : "fail" )
	total += challenges[i]
}

console.log("천 번 도전하여 성공할 확률은 ",total/challenges_num, "입니다.")



function prisoner_open_box(prisonNum){
	
	shuffleArray(box);
	let prisoner_sucess = new Array(100)
	
	for(var j = 0; j < prisonNum; j++){
	console.log("number", j + 1 , "prisoner is box open start")
		let next_box = box[j]
		prisoner_sucess[j] = false;
		if(j === box[j]) {
			prisoner_sucess[j] = true;
			continue;
		}
		for(var i = 0; i < prisonNum/2; i++){
			if(box[next_box] === j){
				prisoner_sucess[j] = true;
				break;
			}		
			next_box = box[next_box]
		}
		console.log("prisoner number", j+1, "is tried ",  i+1, "times and he is", prisoner_sucess[j] ? "sucess" : "fail" )
	}
	
	if(prisoner_sucess.includes(false)){
		console.log("모든 죄수가 ", prisoner_sucess.includes(false)?"사망":"생존", "하였습니다")
	}else {
		console.log("모든 죄수가 생존하였습니다")
	}
	return !prisoner_sucess.includes(false)
}


function shuffleArray(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
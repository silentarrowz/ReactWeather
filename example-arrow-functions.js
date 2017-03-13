var names = ['Andrew','Julie','Jen'];

/*
names.forEach(function(name){
	console.log('forEach',name)
});

names.forEach((name) =>{
	console.log('arrowFunc',name);

});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Faraz'));

*/
var person = {
	name: 'Faraz',
	greet: function(){
		names.forEach((name)  =>   {
			console.log(this.name + 'says hi to'+ name);
		});
		
	  }	

	};

	person.greet();

function add(a,b){
	return a+b;
}	

console.log(add(2,3));

var addStatement = (a,b) => a+b;
var addExpression = (x,y) => {
	return x+y;
}

console.log(addStatement(20,32));
console.log(addExpression('faraz',' is great'));

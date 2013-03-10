var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];

function select(data, key, values){
	var s=[];
	for (var i = 0; i< data.length; i++) {
		var object = data[i];
			for (var j = 0; j < values.length; j++) {
				if(object[key] === values[j])
					s.push(object);

			}

	}
	return s;
}

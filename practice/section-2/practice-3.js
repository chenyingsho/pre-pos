function count_same_elements(collection) {
  //在这里写入代码

  var temp=[];
  for(var i=0;i<collection.length;i++){
  	if (collection[i].length==1) {
  		var existTemp=find(collection[i],temp);
       if(existTemp){
        existTemp.summary++;
       }
       else{
        temp.push({name:collection[i],summary:1});
       }
  	}
  	else if (collection[i].length>1&&collection[i].length<=4) {
  		var existTemp=find(collection[i],temp);
  		if (existTemp) {
  			temp.summary+=Number(collection[i].charAt(2));
  		}else{
  		temp.push({name:collection[i].charAt(0),summary:Number(collection[i].charAt(2))});
  	}
  	}
  	else if (collection[i].length==5){
  		var existTemp=find(collection[i],temp);
  		if (existTemp) {
  			temp.summary+=Number(collection[i].substr(2,2));
  		}else
  		temp.push({name:collection[i].charAt(0),summary:Number(collection[i].substr(2,2))});
  	}
  }
  
  var result=[];
  for(var j=0;j<temp.length;j++){
    var existTemp1=find(temp[j].name,result);
    if(existTemp1){
      existTemp1.summary+=temp[j].summary;
    }
    else{
      result.push({name:temp[j].name,summary:temp[j].summary});
    }
  }
  return result;
}
 function find(elem,temp){
      var extemp;
      for(var j=0;j<temp.length;j++){
      if(elem===temp[j].name){
        extemp=temp[j];
        }
      }
      return extemp;
    }

function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var temp=[];
  for(var i=0;i<collection_a.length;i++){
    if (collection_a[i].charAt(1)==='-') {
      temp.push({key:collection_a[i].charAt(0),count:Number(collection_a[i].charAt(2))});
    }else{
     var existTemp=find(collection_a[i],temp);
       if(existTemp){
        existTemp.count++;
       }
       else{
        temp.push({key:collection_a[i],count:1});
       }
    }
  }
   for(var i=0;i<temp.length;i++){
  	for(var j=0;j<object_b.value.length;j++){
  		if(temp[i].key===object_b.value[j]){
  			//collection_a[i].count=collection_a[i].count-(Math.ceil(collection_a[i].count/3))+1;
  			temp[i].count-=parseInt(temp[i].count/3);
  		}
  	}
  }
  return temp;
}
 function find(elem,temp){
      var extemp;
      for(var j=0;j<temp.length;j++){
      if(elem===temp[j].key){
        extemp=temp[j];
        }
      }
      return extemp;
    }

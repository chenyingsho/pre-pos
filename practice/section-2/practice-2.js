function count_same_elements(collection) {
  //在这里写入代码
  var temp=[];
  for(var i=0;i<collection.length;i++){
    if (collection[i].charAt(1)==='-') {
      temp.push({key:collection[i].charAt(0),count:Number(collection[i].charAt(2))});
    }else{
     var existTemp=find(collection[i],temp);
       if(existTemp){
        existTemp.count++;
       }
       else{
        temp.push({key:collection[i],count:1});
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


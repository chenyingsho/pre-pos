function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  var z=0;
  for (var i = 0; i <collection_a.length; i++) {
  	for(var j=0;j<object_b.value.length;j++)
  	{
  		if (collection_a[i].key===object_b.value[j]) {
  			result[z]=collection_a[i].key;
  			z++;
  		}
  	}
 }
 return result;
}

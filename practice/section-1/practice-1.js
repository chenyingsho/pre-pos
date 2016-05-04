function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
  var z=0;
  for (var i = 0; i <collection_a.length; i++) {
  	for(var j=0;j<collection_b.length;j++)
  	{
  		if (collection_a[i]===collection_b[j]) {
  			result[z]=collection_a[i];
  			z++;
  		}
  	}
 }
 return result;
}

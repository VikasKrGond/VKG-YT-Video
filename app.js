var key = config.SECRET_API_KEY;

function getID(){

	 var searchQUERY= document.getElementById('searchID').value;
	 searchQUERY = searchQUERY.trim();
      searchQUERY = searchQUERY.replaceAll(" ", "%2");
	fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q="+searchQUERY, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
		"x-rapidapi-key": key
	}
})
.then(response => {
	return response.json();
})
.then(data =>{
	document.getElementById('SearchResults').innerHTML = `<div class="searchCard">
    <div class="serCard1">
    <p><b>Title: </b>${data.items[0].title}</p>
	<img class="thumb" src="${data.items[0].bestThumbnail.url}" alt="Thumbnail">
    <p><b>Video-ID:</b>${data.items[0].id}</p><p><b>YouTube Link: </b><a href="${data.items[0].url}" target="_blank" rel="noopener noreferrer">Click Here</a></p>
    </div>
    <div class="serCard1">
    <p><b>Title: </b>${data.items[1].title}</p>
	<img class="thumb" src="${data.items[1].bestThumbnail.url}" alt="Thumbnail">
    <p><b>Video-ID:</b>${data.items[1].id}</p><p><b>YouTube Link: </b><a href="${data.items[1].url}" target="_blank" rel="noopener noreferrer">Click Here</a></p>
    </div>
    <div class="serCard1">
    <p><b>Title: </b>${data.items[2].title}</p>
	<img class="thumb" src="${data.items[2].bestThumbnail.url}" alt="Thumbnail">
    <p><b>Video-ID:</b>${data.items[2].id}</p><p><b>YouTube Link: </b><a href="${data.items[2].url}" target="_blank" rel="noopener noreferrer">Click Here</a></p>
    </div>
    <div class="serCard1">
    <p><b>Title: </b>${data.items[3].title}</p>
	<img class="thumb" src="${data.items[3].bestThumbnail.url}" alt="Thumbnail">
    <p><b>Video-ID:</b>${data.items[3].id}</p><p><b>YouTube Link: </b><a href="${data.items[3].url}" target="_blank" rel="noopener noreferrer">Click Here</a></p>
</div>
</div>`
	console.log(data.items);
    console.log(data.items[0].title);
    console.log(data.items[0].id);
    console.log(data.items[0].url);
	console.log(data.items[1].title);
    console.log(data.items[1].id);
    console.log(data.items[1].url);
	console.log(data.items[2].title);
    console.log(data.items[2].id);
    console.log(data.items[2].url);
	console.log(data.items[3].title);
    console.log(data.items[3].id);
    console.log(data.items[3].url);
    
})
.catch(err => {
	console.error(err);
});
}



function videoGenrate(){
	const ytID = document.getElementById('ytID').value;
fetch("https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id="+ytID+"&geo=DE", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
		"x-rapidapi-key": key
	}
})
.then(response => {
	return response.json();
})
.then(data =>{
	document.getElementById('showVideo').innerHTML= `<div class="vidCard"><p>Title: ${data.title}</p><p>Length: ${data.length}</p><p>Description: ${data.description}</p><p>Channel: ${data.author}</p></div>`
	document.getElementById('link1').innerHTML=`<audio src="${data.link["139"][0]}" controls>360</audio>`
	document.getElementById('link2').innerHTML=`<video src="${data.link["18"][0]}" controls>360</video>`
	document.getElementById('link3').innerHTML=`<video src="${data.link["22"][0]}" controls>720p</video>`
      console.log(data.link["133"][0])
      console.log(data.link["134"][0])
	console.log('Title: ',data.title);
	console.log('Duration: ',data.length);

})
.catch(err => {
	console.error(err);
});
}
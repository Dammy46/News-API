async function getBBC() {

  const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await postsResponse.json()

  const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos")
  const photos = await photosResponse.json()


  const slicedPosts = posts.slice(0, 10)
  const slicedPhotos = photos.slice(0, 10)

  for (let index = 0; index < slicedPosts.length; index++) {
    const post = slicedPosts[index];
    const photo = slicedPhotos[index];
    document.getElementById("CNN").innerHTML +=
       
    `<div class='col-md-6'>	
          <div class='container main'>
			      <div class='img-col'>
				      <img src="
			      	${slicedPhotos[index].url}">
			      </div>
	
		      	<div class='text-col'>
			      	<h3 class='heading text-uppercase'> ${slicedPosts[index].title}</h3>
			      	<p class='paragraph'>
			         	${slicedPosts[index].body} 	
		      		</p>
			      	<a href='Cmore.html' target='_blank'><button class="btn btn-outline-success">Read more</button></a>
		      	</div>
	      	</div>
          
      </div>`

  }
}

var currentIndex = 0;

async function getFull() {
  const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await postsResponse.json()

  const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos")
  const photos = await photosResponse.json()


  var maxResult = 10;
  for (var index = 0; index < maxResult; index++) {
    document.getElementById("CNN").innerHTML +=
      
    `<div class='col-md-6'>	
      <div class='container main'>
        <div class='img-col'>
          <img src="
          ${photos[index + currentIndex].url}">
        </div>

        <div class='text-col'>
          <h3 class='heading text-uppercase'> ${posts[index + currentIndex].title}</h3>
          <p class='paragraph'>
             ${posts[index + currentIndex].body} 	
          </p>
          <a href='Cmore.html' target='_blank'><button class="btn btn-outline-success">Read more</button></a>
        </div>
      </div>  
    </div>`
		      


  }
  currentIndex += maxResult





};

window.setInterval(getBBC());

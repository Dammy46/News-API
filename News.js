async function fetchPost() {

	const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
	const posts = await postsResponse.json()

	const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos")
	const photos = await photosResponse.json()


	const slicedPosts = posts.slice(10, 20)
	const slicedPhotos = photos.slice(10, 20)

	for (let index = 0; index < slicedPosts.length; index++) {
		const post = slicedPosts[index];
		const photo = slicedPhotos[index];
		document.getElementById("inner").innerHTML +=
			`
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
			<a href='more.html' target='_blank'><button class="btn btn-outline-success">Read more</button></a>
		</div>
	
	</div>`


	}
}


async function fetchPhoto() {

	const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
	const posts = await postsResponse.json()

	const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos")
	const photos = await photosResponse.json()


	const slicedPosts = posts.slice(0, 10)
	const slicedPhotos = photos.slice(0, 10)

	for (let index = 0; index < slicedPosts.length; index++) {
		const post = slicedPosts[index];
		const photo = slicedPhotos[index];
		document.getElementById("inner2").innerHTML +=
		`
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
		`


	}
}


window.setInterval(fetchPost(), fetchPhoto());

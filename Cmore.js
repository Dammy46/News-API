async function fullPage() {

	const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
	const posts = await postsResponse.json()

	const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos")
	const photos = await photosResponse.json()


	const slicedPosts = posts.slice(10, 11)
	const slicedPhotos = photos.slice(10, 11)

	for (let index = 0; index < slicedPosts.length; index++) {
		const post = slicedPosts[index];
		const photo = slicedPhotos[index];
		document.getElementById("More").innerHTML +=
			`
		<div class='img-col'>
			<img src="
			${slicedPhotos[index].url}">
		</div>

		<div class='text-col'>
			<h3 class='heading text-uppercase'> ${slicedPosts[index].title}</h3>
			<p class='paragraph'>
			${slicedPosts[index].body} 	
			</p>
		</div>`


	}
}


async function related() {

	const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
	const posts = await postsResponse.json()

	const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos")
	const photos = await photosResponse.json()


	const slicedPosts = posts.slice(10, 13)
	const slicedPhotos = photos.slice(10, 13)

	for (let index = 0; index < slicedPosts.length; index++) {
		const post = slicedPosts[index];
		const photo = slicedPhotos[index];
		document.getElementById("related").innerHTML +=
		`<div class='col-md-4'>
			<div class='main'>
			  	<div class='img'>
					<img src="
					${slicedPhotos[index].url}">
				</div>
	
				<div class='text'>
					<h3 class='head text-uppercase'> ${slicedPosts[index].title}</h3>
					<p class='p'>
					${slicedPosts[index].body} 	
					</p>
						<a href='CNN.html' target='_blank'><button class="btn btn-outline-success">Read more</button></a>
				</div>
			</div>
		</div>`

	}
}
window.setInterval(fullPage(), related())
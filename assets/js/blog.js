// datanya dari mana ?
// kita save kemana ?
const data = []

function submitData(event) {
  event.preventDefault()

  let title = document.getElementById("input-blog-title").value
  let content = document.getElementById("input-blog-content").value
  let image = document.getElementById("input-blog-image").files
  let dateStart = document.getElementById("input-blog-date-start").value
  let dateEnd = document.getElementById("input-blog-date-end").value
  let reactjs = document.getElementById("check1").checked?reactjs :"";
  let nodejs = document.getElementById("check2").checked?nodejs :"";
  let nextjs = document.getElementById("check3").checked?nextjs :"";
  let golang = document.getElementById("check4").checked?golang :"";

  let icon = document.querySelectorAll(".container-check:checked");
  if(icon.length == 0){
    return alert("try check your technologies");
  }

  image = URL.createObjectURL(image[0])

  const obj = {
    title,
    dateStart,
    dateEnd,
    content,
    reactjs,
    nodejs,
    nextjs,
    golang,
    image,
    author: "Rifal Pratama"
  }

  data.push(obj)
  console.log(data)
  renderBlog()
}

function renderBlog() {
  document.getElementById("contents").innerHTML = ""

  for(let i = 0; i < data.length; i++) {
    document.getElementById("contents").innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${data[i].image}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank"
          >${data[i].title}</a
        >
      </h1>
      <div class="detail-blog-content">
        ${data[i].dateStart} | ${data[i].dateEnd} | ${data[i].author}
      </div>
      <p>
        ${data[i].content}
      </p>
      <div class="icon-container">
              <a href=""><i class="fa-brands fa-react" >${data[i].reactjs}</i></a>
              <a href=""><i class="fa-brands fa-node" >${data[i].nodejs}</i></a>
              <a href=""><i class="fa-brands fa-neos" >${data[i].nextjs}</i></a>
              <a href=""><i class="fa-brands fa-golang" >${data[i].reactjs}</i></a>
            </div>


      <div style="float:right; margin: 10px">
        <p style="font-size: 15px; color:grey">1 minutes ago</p>
      </div>
    </div>
  </div>`
  }
}





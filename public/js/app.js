let pDiv = document.querySelectorAll('.post');
pDiv.forEach(element => {

    element.addEventListener("click", () => {

        let postId = element.getAttribute('id');
        console.log(`This is ${postId} Got Clicked!`);
        window.location.href = `/posts/${postId}`;
    });
});


function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='none'
}

var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})
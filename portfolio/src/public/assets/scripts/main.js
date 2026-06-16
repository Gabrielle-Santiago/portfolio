document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");
    const title = document.querySelector(".hero h1");

    const observer = new IntersectionObserver( entries => {

         entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.15 }
    );

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });


    if(title){

        const text = title.innerText;
        title.innerText = "";
        let index = 0;

        function type(){
            if(index < text.length){

                title.innerHTML += text[index];
                index++;
                setTimeout(type,35);

            }
        }
        type();
    }
});
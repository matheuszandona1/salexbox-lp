$(".slider-slick").slick({
  slidesToShow: 1,
  mobileFirst: true,
  slidesToScroll: 1,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  responsive: {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
    },
  },
})

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault()

  const form = event.target
  const data = new FormData(form)
  const redirectUrl = window.location.origin + "/typ.html"

  fetch("https://www.rdstation.com.br/api/1.3/conversions", {
    method: "POST",
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = redirectUrl
      } else {
        console.error("Erro ao enviar o formulário:", response.statusText)
      }
    })
    .catch((error) => {
      console.error("Erro na solicitação:", error)
    })
})

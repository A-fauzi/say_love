

Swal.fire({
  title: 'Hi, Aleyda Kanaya',
  text: 'Klik tombol nya deh',
  confirmButtonText: 'Ayo!',
  width: 500,
  padding: '3em',
  background: 'salmon',
  backdrop: `
    rgba(0,0,123,0.4)
    url("images/cat.gif")
    left top
    repeat
  `
})

.then((result) => {
    Swal.fire({
      title: 'Bagus! Kamu pinter wkk',
      text: 'Coba Sekali lagi',
      confirmButtonText: `Go!`,
  width: 500,
  padding: '3em',
  background: 'salmon',
  backdrop: `
    rgba(0,0,123,0.4)
    url("images/fly.gif")
    left top
    repeat
  `
    })
  
})





 




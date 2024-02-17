
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id: ${id}`)
    },
    pausar: function(id) {
        console.log(`pausando... la concion con el id: ${id}`)
    },
    borrar: function(id) {
        console.log(`Borrando cancion... con el id; ${id}`)
    },
    playList: function(nombre) {
        console.log(`Cancion agregada a la play list: ${nombre}`)
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo cancion... con el id; ${nombre}`)
    }
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.pausar(20)
reproductor.borrar(20)
reproductor.playList('maluma')
reproductor.playList('joger')
reproductor.reproducirPlayList('maluma')




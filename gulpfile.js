const {src, dest, watch} = require('gulp')
const sync = require('browser-sync').create()

function serve() {
    sync.init({
        server: './'
    })
    watch('./**.html').on('change', sync.reload)
    watch('./styles/**.css').on('change', sync.reload)
    watch('./scripts/**.js').on('change', sync.reload)
}

exports.serve = serve
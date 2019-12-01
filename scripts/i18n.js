const fs = require('fs')
const glob = require('glob')

const outputSrc = 'src/locales'
const languages = ['en']

languages.forEach(language => {
    const output = {}

    glob(`src/**/i18n/*.${language}.json`, (error, files) => {
        files.forEach(filename => {
            const contents = JSON.parse(fs.readFileSync(filename, 'utf8'))
            Object.assign(output, contents)
        })

        if(!fs.existsSync(outputSrc)) {
            fs.mkdirSync(outputSrc)
        }

        fs.writeFileSync(`${outputSrc}/${language}.json`, JSON.stringify(output))
    })
})
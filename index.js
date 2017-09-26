const imagemin = require('imagemin');
const imagemin_pngquant = require('imagemin-pngquant');
const imagemin_mozjpeg = require('imagemin-mozjpeg');
const imagemin_svgo = require('imagemin-svgo');

module.exports = (buf) => {
    return imagemin.buffer(buf, {
        plugins: [
            imagemin_mozjpeg({
                quality: 90,
                progressive: true,
            }),
            imagemin_pngquant({}),
            imagemin_svgo({
                plugins: [
                    {removeViewBox: false}
                ]
            })
        ],
        verbose: true
    })
};
/**
 * Created by hanguangtian on 2018/1/8.
 */
module.exports = () => ({
    plugins: {
        "autoprefixer": {
            "browsers": [
                "> 1%",
                "last 2 versions",
                "not ie <= 8"
            ]
        }
    }
})

module.exports = (gulp,Plugin,config)=>{


    var clean = Plugin.clean;
    var git = Plugin.git;


    let options = {
        read:false
    };
    gulp.task('clean-ui', () => {
        return gulp.src('./node_modules/tezign-ui', options)
            .pipe(clean({
                force: true
            }));
    });


    gulp.task('clone-ui',['clean-ui'], () => {
        git.clone('https://git.oschina.net/tezign/tezign-ui.git', {args: './node_modules/tezign-ui'}, function(err) {
            // handle err
            console.log(err);
        });
    });



};


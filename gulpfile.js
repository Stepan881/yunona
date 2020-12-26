"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var server = require("browser-sync").create();
var del = require("del");

var gcmq = require('gulp-group-css-media-queries');
var fileinclude = require('gulp-file-include');
var concat = require('gulp-concat');

  gulp.task("del", function () {
    return del(["assets", "./*html"]);
  });


  gulp.task("css", function () {
    return gulp.src("build/sass/main.scss")
      .pipe(plumber())
      .pipe(sass())
      .pipe(postcss([autoprefixer()]))
      .pipe(gcmq())
      .pipe(gulp.dest("assets/css"))
      .pipe(csso())
      .pipe(rename("main.min.css"))
      .pipe(gulp.dest("assets/css"))
      .pipe(server.stream());
  });

  gulp.task("html", function () {
    return gulp.src("build/html/*.html")
      .pipe(fileinclude({
        context: {
          benefit: ['Калининградская область', 'Компания Юнона'],
          excursion: ['Все экскурсии', 'Все дни', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
          tours: ['Все туры', 'Еженедельные туры', 'Туры для компаний', 'Туры на праздники и события', 'Школьные туры'],
          hotels: ['Калининград', 'Зеленоградск', 'Светлогорск', 'Янтарный', 'Черняховск', 'Гусев', 'Сельские усадьбы'],
          restaurants : ['Калининград', 'Побережье', 'Черняховск', 'Гусев'],
          hotels_page: ['Одноместный номер', 'Двухместный номер', 'Трехместный номер'],
          text: [''],
          num: 0
        },
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./'));
      
  });

  gulp.task("js", function () {
    return gulp.src([
      'node_modules/jquery/dist/jquery.min.js', // Optional jQuery plug-in (npm i --save-dev jquery)
      'build/js/_libs.js', // JS libraries (all in one)
      'build/js/_custom.js', // Custom scripts. Always at the end
      ])
    .pipe(concat('scripts.min.js'))
    //.pipe(uglify()) // Mifify js (opt.)
    .pipe(gulp.dest('assets/js'));
    //.pipe(browserSync.reload({ stream: true }))
      
  });

  gulp.task("img", function () {
    return gulp.src("build/img/**/*")
    .pipe(gulp.dest('assets/img/'));
  });

  gulp.task("server", function () {
    server.init({
      server: "./",
      notify: false,
      open: true,
      cors: true,
      ui: false,
      tunnel: false
    });
    gulp.watch("build/sass/**/*.{scss,sass}", gulp.series("css", "refresh"));
    gulp.watch("build/img/**/*", gulp.series("img", "refresh"));
    gulp.watch("build/html/**/*.html", gulp.series("html", "refresh"));
    gulp.watch("build/js/**/*.js", gulp.series("js", "refresh"));
  });

  gulp.task("refresh", function(done) {
    server.reload();
    done();
  });

gulp.task("build", gulp.series("del", "css", "html", "js", "img"));
gulp.task("start", gulp.series("build", "server"));
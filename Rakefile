# rake sass
desc "Compile sass"
task :sass do
    system "gulp sass"
end

# rake sasswatch
desc "Watch sass"
task :sasswatch do
    system "gulp sasswatch"
end

# rake uncss
desc "Uncss"
task :uncss do
    system "gulp uncss"
end

# rake build
desc "Build Jekyll site"
task :build do
    system "jekyll build"
end

# rake local
desc "Generate local site"
task :local do
    system "jekyll serve --watch"
end

# rake master
desc "Master build"
task :master => [:sass, :uncss, :build] do
end
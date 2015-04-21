require 'json'
require 'carrierwave'
require 'carrierwave/orm/activerecord'
enable :sessions

#messy, messy, messy ----> FIIIXXXX
helpers do
	def current_user
		@current_user = User.find_by(id: session[:user_id]) if session[:user_id]
	end
end

image_global = nil
# configure do
# 	set :image_base64
# end

# => GET
get '/' do
	#if current_user
		#redirect '/home'
	#else
		erb :index
	#end
	#redirect '/'
end

get '/home' do
	@posts = Post.all.reverse
	@posts.to_json
	erb :home
end

get '/login' do
    erb :login
end

get '/profile' do
	@user = current_user
    erb :profile
end

get '/signup' do
	erb :signup
end

get '/logout' do
	# load logout page here
	session.clear
	redirect '/'
end

get '/post/new' do
	puts "test"
	erb :post_new
end

get '/post/all.json' do
	@posts = Post.all
	@posts.to_json
end

get '/post/:id' do
	@post = Post.find(params[:id])
	erb :post_view
end

# get "/#{current_user}/post/all" do
# 	@posts = current_user.posts.all
# end

get '/login/error' do
	# load error page here
end

# => POST
post '/login' do
	username = params[:username]
	password = params[:password]

	@user = User.find_by(username: username)
	if @user.password == password
		session[:user_id] = @user.id
		redirect '/profile'
	else
		redirect '/login'
	end
end

post '/profile' do
	# @user = User.update() ---> update this
	redirect '/'
end

post '/signup' do
	username = params[:username]
	password = params[:password]

	@user = User.find_by(username: username)
	if @user
		redirect '/signup'
	else
		@user = User.create(
			firstname: params[:firstname],
			lastname: params[:lastname],
			username: username,
			password: password,
		)
		session[:user_id] = @user.id
		redirect '/profile'
	end
end

post '/post/create' do
		title = params[:title]
		category = params[:category]
		content = params[:content]
		image = params[:image_base64]
		#@post = Post.where()
		@post = current_user.posts.create(
			title: title,
			category: category,
			content: content,
			likes: 0,
			image: image
		)
		redirect "/post/#{@post.id}"
		
end

post '/upload' do
	post = Post.new
	post.file = params[:file]
	puts params[:file]
	post.save!
	puts post.file
end
# get '/upload' do
# 	# if settings.image_base64 == nil
# 	# 	settings.image_base64 = params[:image_base64]
# 	# end
# 	image_global = params[:image_base64]
# end
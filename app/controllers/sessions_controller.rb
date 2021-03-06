class SessionsController < ApplicationController
  def new
end

def create
  user = User.find_by(:name => params[:name]).authenticate( params[:password] )
  if user
    session[:user_id] = user.id
    redirect_to user_path(user)
  else
    flash.now.alert = "Invalid name or password"
    render "new"
  end
end

def destroy
  session[:user_id] = nil
  redirect_to root_url, :notice => "Logged out!"
end
end

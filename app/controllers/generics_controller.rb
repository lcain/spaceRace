    
class GenericsController < ApplicationController
  def new
    @user = User.create(name: "New User", password: "chicken", password_confirmation: "chicken")
    session[:user_id] = @user.id
    @highscore = Highscore.create(user_id: @user.id.to_i, score: params['score'])
    session[:highscore] = @highscore
    respond_to do |format|
      format.html { render 'users/edit' }
      format.json { render :json => { status: "200 OK" }}
    end
  end
end

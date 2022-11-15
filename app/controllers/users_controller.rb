class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]

  #Signup
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id # this is when user in is session
    render json: user, status: :created
  end

  #Get Current User
  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end

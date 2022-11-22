class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]

  #Signup
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create!(user_params)
    session[:user_id] = @user.id # this is when user in is session
    render json: @user, status: :created
  end

  #Get Current User
  def show
    @user = User.find_by(id: params[:id])
    if @user
      render json: @user, status: :ok
    else
      render json: { erorr: "Not Authorized" }, status: :unauthorized
    end
  end

  private

  def find_user 
    @user = User.find(params[:id])
  end
  
  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end

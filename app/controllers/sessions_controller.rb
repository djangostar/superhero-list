class SessionsController < ApplicationController
  # skip_before_action :authenticate_user, only: [:create, :destroy]

# Login
  def create
    # byebug
    @user = User.find_by(username: params[:username])
    if @user&.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: @user, status: :ok
    else
      render json: { errors: ["Invalid username or password"]}, status: :unauthorized
    end
  end

#Logout
  def destroy
    session.delete :user_id
  end
end

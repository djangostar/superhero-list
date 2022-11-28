class ApplicationController < ActionController::API
  require 'pry'
  include ActionController::Cookies
  # before_action :authenticate_user

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
    User.current_user = @current_user
  end
  
  def authorize_user
    return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
  end

  # rescue_from Active::RecordInvalid, with:    :render_unprocessable_entity
  # rescue_from Active::RecordNotFound, with: :render_not_found
   


  # def authenticate_user
  #   render json: {errors: {User: 'Please login'}}, status: unauthorized unless current_user
  # end

  # def render_unprocessable_entity(invalid)
  #   render json: { errors: invalid.record.errors}, status: :unprocessable_entity
  # end

  # def render_not_found(error)
  #   render json: {errors: {error.model => 'Not Found'}}, status: :not_found
  # end

  # def current_user
  #   @current_user ||= User.find_by_id(session[:user_id]) #memoization caching experience
  #   User.current_user = @current_user
  # end  
end

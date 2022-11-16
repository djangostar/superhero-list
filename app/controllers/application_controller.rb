class ApplicationController < ActionController::API
  require 'pry'
  include ActionController::Cookies
  before_action :authenticate_user
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  private 

  def current_user
    @current_user ||= User.find_by_id(session[:user_id]) #memoization caching experience
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors }, status:
    unprocessable_entity
  end

  def render_not_found(error)
    render json: {errors: {error.model => "Not Found"}}, status: :render_not_found
  end

  def authenticate_user
    # Goal: to check if use is logged in and if they are then we are to let them see parts of our app
    render json: { errors: "Not Authorized"}, status: :unauthorized unless current_user
  end

  # only give admins the right to do something regular users can't
  
end

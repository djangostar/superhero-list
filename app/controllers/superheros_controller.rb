class SuperherosController < ApplicationController
  # skip_before_action :authenticate_user
  # before_action :find_superhero, only: [:show, :update, :destroy]
  #before_action :authorize_user
  
  def index
    @superheros = Superhero.all
    render json: @superheros
  end

  def show
    @user = User.find_by(id: session[:user_id])
    @hero = Superhero.find_by(id: params[:id])
    render json: @hero
  end

  def create
    @user = User.find_by(id: session[:user_id])
    @hero = Superhero.create(superhero_params)
    render json: @hero
  end

  def destroy
    @hero.destroy
  end

  private 

  def superhero_params
    params.permit(:full_name, :alias, :bio, :universe, :img_url, review_attributes: [:input, :score, :user_id])
  end

  def find_superhero
    @hero = Superhero.find(params[:id])
  end
  
  # def authorize_user
  #   return render json: {error: 'Not Authorized' }, status: :unathorized unless session.include? :user_id
  # end
end

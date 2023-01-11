class SuperherosController < ApplicationController
  # skip_before_action :authenticate_user
  # before_action :find_superhero, only: [:show, :update, :destroy]
  #before_action :authorize_user
  
  def index
    superheros = Superhero.all
    render json: superheros
  end

  def show
    hero = Superhero.find_by(id: params[:id])
    render json: hero
  end

  def create
    hero = Superhero.create(superhero_params)
    render json: hero
  end

  def destroy
    hero.destroy
  end

  private 

  def superhero_params
    params.permit(:full_name, :alias, :bio, :universe, :img_url)
  end

  # def find_superhero
  #   Superhero.find(params[:id])
  # end
  
  # def authorize_user
  #   return render json: {error: 'Not Authorized' }, status: :unathorized unless session.include? :user_id
  # end
end

class User < ApplicationRecord
  
  cattr_accessor :current_user
  has_secure_password
  validates :username, uniqueness: true, presence: true
  validates :password, :password_confirmation, confirmation: true
  has_many :reviews
  has_many :superheros, through: :reviews
  
end

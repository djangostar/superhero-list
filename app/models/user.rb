class User < ApplicationRecord
  has_secure_password
  validates :password, confirmation: true
  # validates :password_confirmation, presence: true
  has_many :reviews
  has_many :superheros, through: :reviews
  validates :username, uniqueness: true, presence: true
  
end

class User < ApplicationRecord
  has_secure_password
  has_many :reviews
  has_many :superheros, through: :reviews
  validates :username, uniqueness: true, presence: true
end

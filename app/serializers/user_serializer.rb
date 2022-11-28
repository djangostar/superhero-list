class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_confirmation
  has_many :reviews
  has_many :superheros
end

class Review < ApplicationRecord
  belongs_to :user
  belongs_to :superhero
  validates :user_id, presence: true
  validates :superhero_id, presence: true
end

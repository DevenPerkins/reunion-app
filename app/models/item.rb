class Item < ApplicationRecord

  validates :item_bringing, :party_id, presence: true

  belongs_to :user, optional: true
  belongs_to :party
end

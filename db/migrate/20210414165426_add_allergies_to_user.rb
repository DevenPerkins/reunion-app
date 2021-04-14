class AddAllergiesToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :allergies, :string
  end
end

class AddOver21ToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :over_21, :boolean
  end
end

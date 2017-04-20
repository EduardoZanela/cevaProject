class ModifyCreateUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :email, :string
    add_column :users, :photo_url, :string
    add_column :users, :acess_token, :string
    add_column :users, :birthday_date, :date
  end
end

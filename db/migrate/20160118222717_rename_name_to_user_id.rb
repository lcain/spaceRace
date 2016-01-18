class RenameNameToUserId < ActiveRecord::Migration
  def change
    rename_column :highscores, :name, :user_id
  end
end

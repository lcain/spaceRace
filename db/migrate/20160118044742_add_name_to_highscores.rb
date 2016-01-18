class AddNameToHighscores < ActiveRecord::Migration
  def change
    add_column :highscores, :name, :string
  end
end

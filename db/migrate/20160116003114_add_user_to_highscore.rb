class AddUserToHighscore < ActiveRecord::Migration
  def change
    add_column :highscores, :highscore, :string
  end
end

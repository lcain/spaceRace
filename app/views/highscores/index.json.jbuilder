json.array!(@highscores) do |highscore|
  json.extract! highscore, :id, :score
  json.url highscore_url(highscore, format: :json)
end

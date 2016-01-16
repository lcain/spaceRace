Rails.application.routes.draw do
  get 'sessions/new'

  resources :highscores
  resources :users
get "log_out" => "sessions#destroy", :as => "log_out"
get "log_in" => "sessions#new", :as => "log_in"
get "sign_up" => "users#new", :as => "sign_up"
root :to => "pages#show"
resources :users
resources :sessions
end
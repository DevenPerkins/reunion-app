Rails.application.routes.draw do
  resources :items
  resources :parties
  root to: 'home#index'
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

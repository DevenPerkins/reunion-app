Rails.application.routes.draw do
  get 'user/index'
  resources :items
  resources :parties
  devise_for :users, :path_prefix => 'd'
  resources :users, :only => [:show]
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root to: 'home#index'
  match '/users', to: 'users#index', via: 'get'
  match '/users/:id',     to: 'users#show',       via: 'get'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
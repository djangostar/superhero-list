Rails.application.routes.draw do
  # resources :users, only: [:index, :show, :create]
  resources :reviews
  resources :superheros 
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  get '/all_heroes', to: 'superheros#index'
  get '/this_hero/:id', to: 'superheros#show'
  post '/create_hero', to: 'superheros#create'

  get '/all_reviews', to: 'reviews#index'
  get '/this_review', to: 'reviews#show'
  post '/create_review', to: 'reviews#create'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

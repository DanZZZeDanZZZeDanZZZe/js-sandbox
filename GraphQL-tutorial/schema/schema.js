const graphql = require('graphql')
const Movie = require('../models/movie')
const Director = require('../models/director')

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = graphql

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    watched: { type: new GraphQLNonNull(GraphQLBoolean) },
    rate: { type: GraphQLInt },
    directorId: {type: GraphQLID},
    director: {
      type: DirectorType,
      resolve({ directorId }, args) {
        return Director.findById(directorId)
      }
    }
  })
})

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    movies: {
      type: new GraphQLList(MovieType),
      resolve({ id }, args) {
        return Movie.find({ directorId: id })
      }
    }
  }),
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addDirector: {
      type: DirectorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, { name , age }) {
        const director = new Director({
          name,
          age
        })
        return director.save()
      }
    },
    addMovie: {
      type: MovieType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        directorId: {type: GraphQLID},
        watched: { type: new GraphQLNonNull(GraphQLBoolean) },
        rate: { type: GraphQLInt },
      },
      resolve(parent, { name, genre, directorId, watched, rate }) {
        const movie = new Movie({
          name,
          genre,
          directorId,
          watched,
          rate
        })
        return movie.save()
      }
    },
    deleteDirector: {
      type: DirectorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, { id }) {
        return Director.findByIdAndRemove(id)
      }
    },
    deleteMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, { id }) {
        return Movie.findByIdAndRemove(id)
      }
    },
    updateDirector: {
      type: DirectorType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, { id, name, age }) {
        return Director.findByIdAndUpdate(
          id,
          { $set: { name: name, age: age } },
          { new: true }
        )
      }
    },
    updateMovie: {
      type: MovieType,
      args: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        directorId: { type: GraphQLID },
        watched: { type: new GraphQLNonNull(GraphQLBoolean) },
        rate: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return Movie.findByIdAndUpdate(
          args.id,
          { $set: {...args} },
          { new: true }
        )
      }
    },
  }
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Movie.findById(id)
      }
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Director.findById(id)
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return Movie.find({})
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve() {
        return Director.find({})
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
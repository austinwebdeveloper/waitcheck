var login  = require('../models/login')

module.exports = {


    find: function(params, callback){

        login.find(params, function(err, logins){

            if(err) {

                callback(err, null)
                return

            }

            callback(null, logins)


        })


    },


    findById: function(id, callback){

        login.findById(id, function(err, login){

            if(err) {

                callback(err, null)
                return

            }

            callback(null, login)

        })

    },

    create: function(params, callback){

        login.create(params, function(err, login){

            if(err) {

                callback(err, null)
                return

            }

            callback(null, login)




        })


    },

    update: function(id, params, callback){

        login.findByIdAndUpdate(id, params, {new:true}, function(err, login){

            if(err)
            {
                callback(err, null)
                return
            }

            callback(null, login)

        })


    },

    delete: function(id, callback){

        login.findByIdAndRemove(id, function(err){

            if(err)
            {
                callback(err, null)
                return
            }

            callback(null, null)


        })

    }

}